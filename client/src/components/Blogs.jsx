import React from 'react';

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ['Website Deployment - 5/18/22', 'test2', 'test3'],
      post: {
        banner: '/DronePhoto/DJI_0120.JPG', shorttitle: 'website deployment', title: 'How to deploy your personal website on your old laptop', author: 'Jay', date: '5/18/2022', content: `Deploying a server on your old laptop offers advantages and disadvantages to deploying over a standard cloud based service like AWS or Azure. One advantage is you will not be charged for memory usage or computing time. A disadvantage is your download and upload speeds can be limited by the plan you are signed up for with your ISP. The laptop would be running at all times and the electricity bill can increase. In either case, if you wish to register a domain name, you would still need to pay a yearly fee and end up paying some money in the end.
        The following steps were followed for a PC based deployment.
        1. Purchase domain name through Godaddy.
        2. Use Node.js installer to install Node.js and NPM. Choose carefully during installation to ensure NPM is added. https://nodejs.org/en/download/
        3. Install NVM for Windows. https://github.com/coreybutler/nvm-windows/releases
        4. Install Git for Windows. https://git-scm.com/download/win
        5. Create directories and clone repository.
        6. Run installation commands are necessary for your server. ( npm install, npm run react-dev, npm run start to start server listening ).
        7. Find your personal computer IP address through checking Wifi connection settings. https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9
        8. Edit inbound rules in Firewall to allow access through the port your server listens at ( 3000 in most cases ).
          9. The server is immediately reachable at your PCs IP address and port. ( http://192.168.0.24:3000/ )
        10. Finally, set up port forwarding on Godaddy using your personal computer IP address and port, so traffic arriving at your domain name is forwarded with masking to your IP address port. ( jayandthesky.me → http://192.168.0.24:3000/ ). Port forwarding can take 1 hour up to 48 hours to take effect.

        Thats it! Your website is now up and running!      ` }
    }
  };
  render() {
    let key = 0
    var splitted = this.state.post.content.split('\n')
    return (
      <div>
        <div style={{ width: '20%', float: 'left', marginLeft: '5%', textDecoration: 'underline' }}>
          <div id="postlinks" style={{ float: 'left', width: '12%' }}>
            <div className="triplinks" style={{ textDecoration: 'underline' }} >Posts</div>

            {this.state.posts.map((post) => {
              return (
                <div>
                  <div className="triplinks" style={{ whiteSpace: 'nowrap' }} key={key++}>{`${post}`}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ width: '60%', float: 'left' }}>
          <div style={{ overflow: 'hidden' }}>
            <img style={{ marginTop: '-150px' }} width='1000px' src={this.state.post.banner} />
            {this.state.post.banner}
          </div>
          <div>
            Title: {this.state.post.title}
            <br></br>
            Author: {this.state.post.author} - {this.state.post.date} </div>
          <br></br>
          {splitted.map(function (split) {
            return (<p>{split}</p>)
          })}
          <br></br>
        </div>
      </div>
    )
  }
}

export default Blogs;