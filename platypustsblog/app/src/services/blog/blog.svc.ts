import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogService extends BaseService {

    getPosts(): async.IThenable<Array<models.IPost>> {
        return this.http.json<Array<any>>({
            method: 'GET',
            headers: {
                "X-Parse-Application-Id": "i6DrFWSOMvCPx9Q7pdLkOpndoS7pnNPuiCfGRpoz",
                "X-Parse-REST-API-Key": "VKNod4tecDA1NN2pqdj76rhKs9xUDDkXX1BfqlTU",
                "Content-Type": "application/json"
            },
            url: this.host
        }).then((success) => {
            var res: any = success;
            return <Array<models.IPost>>res.response.results;
        });


    }
    Postblog(post: any): async.IThenable<Array<models.IPost>> {
        return this.http.json<Array<any>>({
            method: 'POST',
            headers: {
                "X-Parse-Application-Id": "i6DrFWSOMvCPx9Q7pdLkOpndoS7pnNPuiCfGRpoz",
                "X-Parse-REST-API-Key": "VKNod4tecDA1NN2pqdj76rhKs9xUDDkXX1BfqlTU",
                "Content-Type": "application/json"
            },
            url: this.host,
            data: post
        })
        .then((success) => {
            var res: any = success;
            return <Array<models.IPost>>res.response.results;
        });
    }
    
}    

register.injectable('blog-svc', BlogService);