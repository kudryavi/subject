import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  subj = new Subject();
}
