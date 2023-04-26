export interface centerCard {
  thumbnailSrc: string;
  headerTitle: string;
  headerSubtitle: string;
  commentsExpanded: boolean;
  postLiked: boolean;
  // comments: Array<MyComment>;
  newCommentTextValue: string;
  postLikes: number;
  scrollViewItems: Array<Record<string, unknown>>;
}
