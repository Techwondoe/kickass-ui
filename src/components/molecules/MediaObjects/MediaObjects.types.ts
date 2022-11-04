export enum MediaObjectAlign {
  BOTTOM = 'bottom',
  CENTER = 'center',
  STRETCHED = 'stretched',
}

/**
 * @params align - Can be bottom/center/stretched
 * @params body - additional text
 * @params heading - primary text
 * @params imgSrc - image source url
 */
export interface MediaObjectProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: MediaObjectAlign;
  body: string;
  heading: string;
  imgSrc: string;
}
