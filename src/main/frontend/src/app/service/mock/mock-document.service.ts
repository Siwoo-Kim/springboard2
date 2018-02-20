import { Injectable } from '@angular/core';
import {DocumentService} from "../document.service";
import {Http,Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Document} from "../../model/document";
import {Page} from "../../model/page.model";

@Injectable()
export class MockDocumentService implements DocumentService{

  /*firebase realdatabase url*/
  backendUrl: string ='https://springboard2-d5d2b.firebaseio.com/';

  constructor(public http:Http){}


  postDocument(document: Document): Observable<Document> {
    documents.push(document);
    document.id = documents.length;
    return Observable.create(observer => {
      observer.next(document);
    })
  }

  documentById(documentId:number): Observable<Document>{
    return Observable.create(observer =>{
      observer.next(
        documents
          .filter(document => document.id == documentId)[0] );
    })
  }

  documents(): Observable<Page> {
    return this.http.get(this.backendUrl+"documents.json",)
      .map(response => {
        return Page.toPage(response.json());
      });
  }

}

var documents = [
  {
    id : 1,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 2,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 3,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 4,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 5,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 6,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 7,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 8,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 9,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 10,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 11,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 12,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 13,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 14,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 15,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 16,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  },
  {
    id : 17,
    title: 'dummy title',
    text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
    writer: 'anonymous',
    postDate: new Date(),
  }
];
