import { Injectable } from '@angular/core';
import {Page} from "../model/page.model";

@Injectable()
export class PageService {

  constructor() {

  }

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


