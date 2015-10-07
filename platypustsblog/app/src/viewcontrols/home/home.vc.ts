import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostViewControl from '../post/post.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    context: any = {};
 createpost(): void {
     this.navigator.navigate(PostViewControl);
 }
 
    
}
   
register.viewControl('home-vc', HomeViewControl);
