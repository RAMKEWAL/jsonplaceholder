import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PostService } from '../../../service/post.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})

export class ListingComponent implements OnInit, AfterViewInit {

  public loading: boolean;
  public user_Id;
  // Columns Name
  displayedColumns = ['id', 'title', 'body', 'action'];

  dataSource = new MatTableDataSource<Element>();

  // Function to filter table data
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // Pagination
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  constructor(private service: PostService,
    private matSnack: MatSnackBar
    // private toastr: ToastrService
  ) {
    this.postData();
  }
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.dataSource.paginator;
  }
  ngOnInit() {

  }

  // Insert the data in table
  async postData() {
    this.loading = true;
    const posts: any = await this.service.getPostService();
    this.dataSource.data = posts;
    this.loading = false;
    // console.log(this.dataSource.data);
  }

  // Delete the data from table
  deletePost(id) {
    // console.log(id);
    this.service.deletePostService(id).subscribe((res: any) => {
      this.matSnack.open('Listing Delete Succesfully', 'Close', { duration: 1000 });
    });
  }

  deleteUser(id) {
    this.user_Id = id;
  }
}



export interface Element {
  id: any;
  title: number;
  body: string;
}
