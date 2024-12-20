import React from 'react';


class Pagination extends React.Component{
  constructor(props){
    super(props);
    this.state={
        currentpage:1,
        Totalpages:0,
    }
}
 goToNextPage=()=>{
if(currentpage!==Totalpages)
   this.setCurrentPage+1;
}
goToPrevPage=()=>{
    if(currentpage!=1)
        this.setCurrentPage-1;
}
render(){
    return(
        <div>
<button onClick={this.goToPrevPage}>Prev Button</button>
<button onClick={this.goToNextPage}>Next BUtton</button>
        </div>
    )
}
}
export default Pagination;