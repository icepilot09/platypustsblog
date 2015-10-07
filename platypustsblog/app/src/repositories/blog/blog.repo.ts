import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import BlogService from '../../services/blog/blog.svc';

export default class BlogRepository extends BaseRepository {
	constructor(private blogService: BlogService) {
        super();
    }
	Postblog(post: any): async.IThenable<Array<models.IPost>> {
		var newpost = post;
		return this.blogService.Postblog(newpost);
	};


	posts: Array<any> = [];
	getPosts(): async.IThenable<Array<models.IPost>> {
		
		return this.blogService.getPosts().then((results) => {
			results.forEach((result) => {
				this.posts.push(result);
			})
			return this.posts.reverse();
		})
		
		
	};
}

register.injectable('blog-repo', BlogRepository, [BlogService]);