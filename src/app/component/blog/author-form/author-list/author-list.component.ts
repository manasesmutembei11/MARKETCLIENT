import { Component, OnDestroy } from '@angular/core';
import { Author } from '../../../../Models/Blog/author.model';
import { BasePagedListComponent } from '../../../../core/base-paged-list-component';
import { BlogService } from '../../../../Services/blog.service';
import { Params } from '@angular/router';
import { __metadata } from 'tslib';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent extends BasePagedListComponent implements OnDestroy{

  authors: Author[] = [];
    

  
  constructor(private blogService: BlogService) { 
    super();
  }

  ngOnInit(): void {
    this.getAllPeople();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  getAllPeople(): void {
    this.blogService.GetPagedAuthors(this.page, this.pageSize).subscribe({
      next:(_)=>{
        this.authors = _.data;       
        this.totalCount = _.metadata.totalCount;       
      }
    })
      
  }


  deletePerson(id: string): void {
    const confirmed = window.confirm('Are you sure you want to delete this person?');
    if (confirmed) {
      this.blogService.DeleteAuthor(id)
        .subscribe(() => {
          this.authors = this.authors.filter(p => p.authorId !== id);
        }, Response=>{
          console.log(Response);
        }
        
        );
        
    }
  } 
  loadItems(): any {
    this.blogService.GetPagedAuthors(this.page, this.pageSize).subscribe(response => {
      this.totalCount = response.metaData.totalCount;
      this.authors = response.data;
    });
  }

  fetchPagingParams(params: Params): void {
    super.fetchPagingParams(params);
  }

  onPageChange(page: number) {
    //this.page = page; 
    this.getAllPeople(); 
  }



}
