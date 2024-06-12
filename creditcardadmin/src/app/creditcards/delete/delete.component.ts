import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditcardsService } from 'src/app/services/creditcards.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  creditCardId!: Number;

  constructor(private router: ActivatedRoute,
    private route: Router,
    private creditcardsService: CreditcardsService) {
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');
    

    // Delete Functionality
    this.creditcardsService.deleteCreditCard(this.creditCardId).subscribe(data => {
      alert("Credit Card Deleted");
      this.route.navigate(['creditcards']);
    })
  }
}
