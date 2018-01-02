import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";



@Injectable()
export class InterceptedHttp extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {

    super(backend, defaultOptions);

  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }

    // jwt header
    let token:string = localStorage.getItem('token');

    console.error("token:"+token);
    if(token){
      options.headers.append('token', token);
    }

    return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
  }

  post(url: string, body: any, options): Observable<Response> {

    //form data encodeURIComponent
    let str = [];
    for (let p in body) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(body[p]));
    }
    body = str.join("&");

    console.log(body);

    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // jwt header
    let token:string = localStorage.getItem('token');

    console.error("token:"+token);
    if(token){
      options.headers.append('token', token);
    }
    return this.intercept(super.post(url, body, options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {

    return super.put(url, body, this.getRequestOptionArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {

    return super.delete(url, this.getRequestOptionArgs(options));
  }


  // 添加header
  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json')

    return options;
  }

  // reponse 拦截
  intercept(observable: Observable<Response>): Observable<Response> {

    return observable.map((res) => {

      console.log(res);

      let token:string = res.headers.get('token');

      if(token && token != localStorage.getItem('token')){
        localStorage.setItem('token',token);
      }
      

      // console.log(url);
      // let url:string = res.url;


      let data = res.json();

      // console.log("链接");
      // console.log(data);


      if (data.success) {

        // console.log(0);

        return data;

      } else {

        // 用户过期
        if (data.msg === "Bad token") {
          // 销毁用户
          // this.authService.destroy();

        
        }
        throw Observable.throw(data).error;

      }




    }).catch((err:any) => {
      console.log(err);
      console.log("Caught error: " + err);

      throw Observable.throw(err);

    });



  }


}
