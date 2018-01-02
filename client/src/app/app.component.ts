import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponentProvider } from './app.component.privider';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppComponentProvider]
})
export class AppComponent {
  title = 'app';
  list: any = [];
  param: any = {
    size: 20,
    curPage: 1,
    id: ''
  };
  name: string;

  page: any = {
    curPage: 1,
    pages: 1000,
    totalCount: 10000
  };

  finishs = [
    {
      text: '全部',
      value: 'all'
    }, {
      text: '连载中', value: false
    }, { text: '已完结', value: true }];

  types = [
    { text: '全部', value: 'all' }, { text: '少年热血', value: '少年热血' }, { text: '武侠格斗', value: '武侠格斗' }, { text: '少女爱情', value: '少女爱情' }, { text: '运动竞技', value: '运动竞技' }, { text: '科幻魔幻', value: '科幻魔幻' }, { text: '幽默爆笑', value: '幽默爆笑' }, { text: '侦探推理', value: '侦探推理' }, { text: '东方同人', value: '东方同人' }, { text: '少年漫画', value: '少年漫画' }, { text: '少女漫画', value: '少女漫画' }, { text: '青年漫画', value: '青年漫画' }, { text: '女青漫画', value: '女青漫画' }, { text: '其他', value: '' }
  ];

  charets = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9'];

  classActive = {
    type: 'all',
    isFinish: 'all',
    char: ''
  };

  constructor(private service: AppComponentProvider) { }

  ngOnInit() {
    this.getHttp(this.param);
  }
  // page nav
  pageChange(cur) {
    this.param.curPage = cur;
    var obj = Object.assign({}, this.store);
    var c =Object.assign(obj, this.param);

    console.log(this.store);
    this.getHttp(c);


  }

  // search
  ajax2: Subscription
  submit() {
    this.searchHttp({ name: this.name });
  }

  // search
  store: any = {};
  search(type, value) {
    let obj: any = {};

    if (type) {
      obj[type] = value;

      this.classActive[type] = value;
    }
    var c = Object.assign(this.store, obj);
    
    c = Object.assign(c, this.param);
    console.log(this.store);
    console.log(c);
    this.getHttp(c);
  }

  // http
  searchAjax: Subscription;
  searchHttp(param) {
    this.searchAjax = this.service.search(param).subscribe((res: any) => {
      // res = res.json();

      if (res.success) {
        if (res.data.length > 0) {
          this.list = res.data;


          for (let i in this.list) {
            let item = this.list[i];
            if (item.img.indexOf('images.dmzj.com') != -1) {
              item.img = "/api/img?url=" + item.img;
            }

          }

        } else {
          this.list = [];
        }
      }
    });
  }
  ajax: Subscription;
  getHttp(param) {
    this.ajax = this.service.get(param).subscribe((res: any) => {
      console.log(res);

      // res = res.json();

      console.log(res);

      if (res.success) {

        this.list = res.data;

        this.page = res.page;

        // alert();
        for (let i in this.list) {
          let item = this.list[i];
          if (item.img.indexOf('images.dmzj.com') != -1) {
            item.img = "/api/img?url=" + item.img;
          }

        }


      } else {
        this.list = [];
      }
    });
  }

  ngOnDestroy() {
    if (this.ajax) {
      this.ajax.unsubscribe();
    }

    if (this.searchAjax) {
      this.searchAjax.unsubscribe();
    }
  }

}
