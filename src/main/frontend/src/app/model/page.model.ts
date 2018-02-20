

export class Page {
  offset: number;
  pageNumber: number; /* 현재 페이지 */
  pageSize: number;   /* 한 페이지의 크기 */
  totalPages: number;  /* 총 페이지 */
  totalElements: number; /* 총 페이지 데이터 갯수 */
  last: boolean;
  first: boolean;
  numberOfElements: number; /*현재 페이지 데이터 갯수*/
  content: any;

  static toPage(data:any): Page{
    return {
      offset: data.pageable.offset,
      pageNumber: data.pageable.pageNumber,
      pageSize: data.pageable.pageSize,
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      last: data.last,
      first: data.first,
      numberOfElements: data.numberOfElements,
      content: data.content,
    };
  }
}
