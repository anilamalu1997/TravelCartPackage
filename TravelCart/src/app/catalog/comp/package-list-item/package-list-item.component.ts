import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Package } from '../../models/package';
import { PackageListingState } from '../../reducers/package-listing.reducer';
import * as PackageListingActions from '../../actions/package-listing.actions';
import { ToastPopoverService } from 'src/app/core/services/toast-popover.service';


@Component({
  selector: 'app-package-list-item',
  templateUrl: './package-list-item.component.html',
  styleUrls: ['./package-list-item.component.scss']
})
export class PackageListItemComponent implements OnInit {

  @Input()
  package!: Package;

  rating = 5;

  constructor(
    private toastService: ToastPopoverService,
    private store: Store<PackageListingState>,
    private route : ActivatedRoute,
    private router: Router
    
  ) { }

  ngOnInit(): void {
  }

  onPackageSelected(){
    this.router.navigate(['..',this.package.id], {relativeTo : this.route});
  }



  addItemToCart(event:any){

   
    event.preventDefault();
    event.stopPropagation();
    this.store.dispatch(PackageListingActions.addPackageToCart({package:this.package}));
    this.toastService.sendMessage('Added to cart');
   
  }
}
