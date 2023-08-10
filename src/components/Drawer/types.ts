export type ActionProps = {
  text: string;
  icon: string;
  showRightIcon?: boolean;
};

export type NavigationProps = {
  text: string;
  icon: string;
  showIcon?: boolean;
  isParentItem?: boolean;
  showNotification?: boolean;
  showCheckbox?: boolean;
};

export type SectionItemProps = {
  label: string;
  icon: string;
};

export type SectionTitleAction = {
  icon: string;
};

export type SectionTitleProps = SectionItemProps & {
  items: Array<SectionItemProps>;
  action?: SectionTitleAction;
};

export type SectionProps = SectionItemProps & {
  items: Array<SectionItemProps>;
  action?: SectionTitleAction;
};
