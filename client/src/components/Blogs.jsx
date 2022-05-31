import React from 'react';

class Blogs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: ['temp1', 'temp2', 'temp3']
    }
  };
  render () {
    let key = 0
    return (
      <div>
        <div style={{width:'20%', float: 'left', marginLeft: '5%', textDecoration: 'underline'}}>
          Posts
          <div id="postlinks" style={{ float: 'left', width: '12%' }}>
            <h4 className="postlinks" style={{ textDecoration: 'underline' }} >Posts</h4>
            {this.state.posts.map((post) => {
              return (
                <h4 className="triplinks" key={key++}>{post}</h4>
              )
            })}
          </div>
          <div>
            <div>Item1 - Date1</div>
            <div>Item2 - Date2</div>
            <div>Item3 - Date3</div>
          </div>
        </div>
        <div style={{width:'60%', float: 'left'}}>
          <div>Banner</div>
          <div>Author Info, Title, Author, Date</div>
          <div>Content, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, filler, </div>
        </div>
      </div>
    )
  }
}

export default Blogs;