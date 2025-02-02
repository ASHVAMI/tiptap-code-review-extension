import { Mark, mergeAttributes } from '@tiptap/core';

export interface CodeReviewOptions {
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    codeReview: {
      setCodeReview: (severity: 'info' | 'warning' | 'error') => ReturnType;
      unsetCodeReview: () => ReturnType;
    };
  }
}

export const CodeReview = Mark.create<CodeReviewOptions>({
  name: 'codeReview',

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      severity: {
        default: 'info',
        rendered: true,
        parseHTML: element => element.getAttribute('data-severity'),
        renderHTML: attributes => ({
          'data-severity': attributes.severity,
        }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-code-review]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(
      { 'data-code-review': '' },
      HTMLAttributes,
      {
        class: `code-review code-review-${HTMLAttributes.severity}`,
      }
    ), 0];
  },

  addCommands() {
    return {
      setCodeReview:
        (severity) =>
        ({ commands }) => {
          return commands.setMark(this.name, { severity });
        },
      unsetCodeReview:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
});