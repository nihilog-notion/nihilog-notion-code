interface NotionLabel {
  color: string;
  id: string;
  name: string;
}

interface NotionNumber {
  id: string;
  number: number;
  type: string;
}

interface NotionSelect {
  id: string;
  select: NotionLabel;
  type: string;
}

interface NotionTime {
  id: string;
  type: string;
}

interface NotionCreated extends NotionTime {
  created_time: string;
}

interface NotionUpdated extends NotionTime {
  last_edited_time: string;
}

export interface NotionText {
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  }
  text: {
    content: string;
    link?: {
      url: string;
    } | null;
  }
  plain_text: string;
  href?: string | null;
  type: string;
}

interface NotionRichText {
  id: string;
  rich_text: NotionText[];
  type: string;
}

interface NotionFormula {
  id: string;
  formula: {
    string: string;
    type: string;
  }
  type: string;
}

interface NotionStatus {
  id: string;
  status: NotionLabel;
  type: string;
}

interface NotionMultiSelect {
  id: string;
  multi_select: NotionLabel[];
  type: string;
}

interface NotionTitle {
  id: string;
  title: NotionText[];
  type: string;
}

interface NotionCheckbox {
  checkbox: boolean;
  id: string;
  type: string;
}

interface NotionCover {
  external?: {
    url: string;
  };
  type: string;
}

interface NotionProperties {
  ID: NotionNumber;
  slug: NotionFormula | null;
  title: NotionTitle;
  description: NotionRichText;
  category: NotionSelect;
  tags: NotionMultiSelect;
  level: NotionSelect;
  status: NotionStatus;
  created: NotionCreated;
  updated: NotionUpdated;
  published: NotionCheckbox;
}

export interface NotionDatabaseRow {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  }
  last_edited_by: {
    object: string;
    id: string;
  }
  cover: NotionCover | null;
  icon: null;
  parent: {
    type: string;
    database_id: string;
  }
  archived: boolean;
  properties: NotionProperties;
  url: string;
}

export interface NotionPrePost {
  id: string;
  cover: NotionCover;
  properties: NotionProperties;
}

export interface NotionPostData {
  data: NotionPrePost[];
  count: number;
}

export interface IPost {
  pageId: string;
  ID: number;
  slug: string | null;
  cover: string | null;
  title: string;
  description: string | null;
  category: string;
  tags: string[];
  level: string;
  status: string;
  created: string;
  updated: string;
  published: boolean;
}

export interface IPostPage {
  page: IPost;
  mdString: string;
}

export interface NotionPages {
  page: number;
  no: number;
  id: string;
}
