import React from 'react';


class Item extends React.Component{
  constructor(props){
    super(props);
    this.state={
      images:[],
      error:null,
      CurrentPage:1,
       PageSize:10,
       TotalPages:0,
       
    }
  }
localStorage=()=>{
  const user=localStorage.setItem("user",john)
  console.log(user)
}

  fetchData=(page)=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
  
    .then((response)=>{
      if(!response.ok){
        throw new Error("Network response was not ok");
        }
        return response.json();  
      })
      .then((data) => {
        const totalPages = Math.ceil(data.length / this.state.PageSize);

        this.setState({
          images: data,  
          CurrentPage: page, 
          TotalPages:totalPages,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,  
        });
    })
  }

  goToNextPage=()=>{
    const{CurrentPage}=this.state
    if(CurrentPage!=this.TotalPages){
      this.setState( {CurrentPage: CurrentPage + 1});
    }
    }
    goToPrevPage=()=>{
      const{CurrentPage}=this.state
        if(CurrentPage>1)
            this.setState({CurrentPage: CurrentPage - 1});
    }


// getFunction=()=>{
//   const { data, currentPage, PageSize } = this.state;
//   const indexOfLastItem = currentPage * PageSize;
//   const indexOfFirstItem = indexOfLastItem - PageSize;
//   return data.slice(indexOfFirstItem, indexOfLastItem); 
// }

  componentDidMount(){
this.fetchData(this.state.CurrentPage);
  }

  render(){
    const{images,error,CurrentPage,PageSize}=this.state;
   

     
    return(
      <div> 
        
        
        {/* {data.slice(CurrentPage*10-10,CurrentPage*10).map(item => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.url}</p>
        </div>
            
          ))} */}
        <div className="image-gallery" style={{ display: 'grid',gridTemplateColumns: "auto auto auto auto"}}>
            
              {images.slice(CurrentPage*60-60,CurrentPage*60).map((image, index) => (
                <div key={image.id}>
                  <img src={image.url} />
                </div>
              ))
            }
          </div>
        
        <div>
          <button onClick={this.goToPrevPage}>Prev</button>
          <span>Page of {this.state.CurrentPage} of {this.state.TotalPages}</span>
          <button onClick={this.goToNextPage}>Next</button>
        </div>
      </div>
    )
  }
}
export default Item;


