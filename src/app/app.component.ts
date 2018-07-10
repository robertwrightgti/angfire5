import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    public items: Observable<any[]>;

    constructor(private afs: AngularFirestore) {

        // const list: FirebaseListObservable<Item[]> = afs.collection('notes');
        this.items = afs.collection('/notes').valueChanges();

    }
}
