import React from 'react';

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ['Website Deployment - 5/18/22'],
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

        Thats it! Your website is now up and running!      `, tags: ['Deployment', 'Windows', 'IP', 'DNS']
      }
    }
  };
  render() {
    let key = 0
    var splitted = this.state.post.content.split('\n')
    return (
      <div >
        <div style={{ width: '20%', float: 'left', marginLeft: '5%', textDecoration: 'underline' }}>
          <div id="postlinks" style={{ float: 'left', width: '12%' }}>
            <div className="triplinks" style={{ textDecoration: 'underline' }} >Posts</div>
            {/* <button style={{ whiteSpace: 'nowrap' }}>Add New</button> */}

            {this.state.posts.map((post) => {
              return (
                <div>
                  <div className="triplinks" style={{ whiteSpace: 'nowrap' }} key={key++}>{`${post}`}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ width: '60%', float: 'left', backgroundColor: 'white' }}>
          <div style={{ height: '400px', overflow: 'hidden' }}>
            <img
              // style={{ marginTop: '-150px' }}
              src={this.state.post.banner} style={{ width: '100%' }} />
            <h1 style={{ position: 'absolute', top: '25%', left: '34%', size: '20p', width: '40%', color: 'white', textAlign: 'center' }}>How to deploy your personal website on your old laptop</h1>
          </div>
          <div>
            <div style={{ textAlign: 'center' }}>
              Author: Jay
            </div>
            <div style={{ textAlign: 'center' }}>
              Date: 5/18/2022
            </div>
            <div>
              <p>
                Deploying a server on your old laptop offers advantages and disadvantages to deploying over a standard cloud based service like AWS or Azure. One advantage is you will not be charged for memory usage or computing time. A disadvantage is your download and upload speeds can be limited by the plan you are signed up for with your ISP. The laptop would be running at all times and the electricity bill can increase. Additionally, configuring a home server requires some knowledge of DNS, IPs, router settings, and port-forwarding. In either case, if you wish to register a domain name, you would still need to pay a yearly fee and end up paying some money in the end.
              </p>
              <p>
                The following steps were followed for a PC based deployment.
              </p>
              <ul>
                <li>
                  1. Purchase domain name through Godaddy.
                </li>
                <li>
                  2. Use Node.js installer to install Node.js and NPM. Choose carefully during installation to ensure NPM is added. https://nodejs.org/en/download/
                </li>
                <li>
                  3. Install NVM for Windows. https://github.com/coreybutler/nvm-windows/releases
                </li>
                <li>
                  4. Install Git for Windows. https://git-scm.com/download/win
                </li>
                <li>
                  5. Create directories and clone repository.
                </li>
                <li>
                  6. Run installation commands as necessary for your server. ( npm install, npm run react-dev, npm run start to start server listening ).
                </li>
                <li>
                  7. The traffic routing design is as follows:
                Domain name --> (port-forwarded) --> Router public IPv4 --> (port-forwarded) --> Server computer private IPv4.
                </li>
                <li>
                   8. To determine your server computers IP, open up cmd in start menu, and enter the command >insert, the >insert is your computer server IP address. Alternatively, find the IP through checking Wifi connection settings. https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9
                </li>
                <li>
                  9. Edit inbound rules in Firewall to allow access through the port your server listens at ( 3000 in most cases ).
                </li>
                <li>
                  10. The server is immediately reachable on your WiFi at your IP address + port. ( http://192.168.0.24:3000/ )
                </li>
                <li>
                  11. To open up a port on your router, log in to your routers GUI. How to access your router GUI is normally printed somewhere on the router. Otherwise, visiting 192.168.0.0 or 192.168.0.1 may allow you to access the log in. >insert. Create a new Port-forward to recieve connections on port 3000 and forward traffic to your server computer IP + port.
                </li>
                <li>
                  12. Finally, set up port forwarding with masking on Godaddy in your DNS settings to send traffic to your router IP + port. Visit https://www.whatismyip.com/ while connected to your Wifi to determine your routers public IP address. ( jayandthesky.me → http://67.161.47.190:3000/ ). Godaddy Port forwarding can take 1 hour up to 48 hours to take effect. Your router Port Forward should take effect immediately.
                </li>
              </ul>
              <p>
                Thats it! Your website is now up and running!
              </p>
              <p>Additional Notes:</p>
              <p>Based on this design, your website can be accesssed several ways. While on the WiFi network, you may connect to your website through the server computer IP, router IP, or domain name. While off the WiFi network, you may connect to your website through the router IP or domain name. </p>
              <p>Your server computer and router have public and private IP addresses which should not be mixed up. The public address is reachable by users not connected to your local network. The private IP address is created for each device by your router in numerical order, with the router commonly starting at 192.168.0.0 or 192.168.0.1, and following devices in order (192.168.0.2, 192.168.0.3, 192.168.0.4, etc). All your devices, laptops, phones, Google Home, are all assigned a private IP address. A user not connected to your WiFi/local network is unable to reach your server computer via the private/local IP address.</p>
              <div>
                Tags: Deployment, Windows, IP, DNS
              </div>
            </div>
          </div>

          {/* <div>
            {this.state.post.title}
            <br></br>
            Author: {this.state.post.author} - {this.state.post.date} </div>
          <br></br> */}
          {/* {splitted.map(function (split) {
            return (
              <div>
                <p>{split}</p>
                <ul>
                  <li>{split}
                  </li>
                </ul>
              </div>)
          })} */}

          <br></br>
        </div>
      </div>
    )
  }
}

export default Blogs;