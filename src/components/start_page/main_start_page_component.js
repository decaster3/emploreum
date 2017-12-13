import React, { Component } from 'react'
import * as firebase from 'firebase'
import { Link } from 'react-router-dom'

export default class MainStartPage extends Component {
  constructor (props) {
    super(props)
    this.downloadParep = this.downloadParep.bind(this)
  }
  componentDidMount () {
    var canvasDiv = document.getElementById('particle-canvas')
    var options = {
      particleColor: '#888',
      interactive: true,
      speed: 'medium',
      density: 'high',
      background: "/assets/img/bg.png"
    }
    var particleCanvas = new ParticleNetwork(canvasDiv, options)
    window.midleTopSection()
  }

  downloadParep () {
    var storage = firebase.storage()
    var pathReference = storage.ref('line1.png')
    pathReference.getDownloadURL().then(function (url) {
      var xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = function (event) {
        var blob = xhr.response
        console.log(blob)
        console.log(event)
      }
      xhr.open('GET', url)
      xhr.send()
    }).catch(function (error) {
      console.log(error)
    })
  }
  render () {
    return (
      <div className='bodyClass'>
        <header className='start hidden-xs'>
          <div className='block' id='header-about'>
            <span>
              about
            </span>
          </div>
          <div className='block' id='header-team'>
            <span>
              TEAM
            </span>
          </div>
          <div className='block'>
            <span>
              paper
            </span>
          </div>
          <div className='block'>
            <span>
              contact
            </span>
          </div>
        </header>
        <section id='top-section'>
          <div id='particle-canvas' />
          <div id='text'>
            <h2>Emploreum</h2>
            <small>
              Education, experience, skills - one token on the blockchain. This is the revolution in recruitment of IT employees.
            </small>
          </div>
        </section>
        <section id='desccription'>
          <div id='window'>
            <div id='top-panel'>
              <div className='top-btn bg-danger' />
              <div className='top-btn bg-info' />
              <div className='top-btn bg-success' />
            </div>
            <div id='window-content'>
              <img src='../../assets/img/desc.png' className='img-responsive hidden-sm hidden-md hidden-lg' />
                    T is the most developing region in the world. The search for qualified employees requires tremendous
                    efforts. We break the
                    recruitment industry. Emploreum is a bridge between
                    IT companies and specialists. Distributed system for the
                    search for employees and the conclusion of labor contracts
                    in the field of IT on the basis of Ethereum block. The whole
                    history of the employee's work, his education, the current
                    level of knowledge in certain areas of IT is an employee's token that
                    can be used anywhere. Both employees and companies have a rating.
                    The system decides how much it costs to work an employee, relative to his token,
                    competition for this vacancy, location of residence, and the company that employs it.
              <div id='plus'>
                <div data-target='fadeInLeft' className='col-xs-12 col-sm-6 col-md-3 item blue-item'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                                A unique cv-token
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Anyone can create his own labour book in the blockchain, which reflects the level of specific skills, experience, education, certificates.

                  </div>
                </div>
                <div data-target='fadeInLeft' className='col-xs-12 col-sm-6 col-md-3 item blue-item'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    Escrow smart contracts instead of a labor contract
                  </div>
                  <div className='col-xs-12 ' id='text'>
                  Jobs are a smart contract, with the requirement for work experience, and a level of certain skills.
                  </div>
                </div>
                <div className='clearfix hidden-md hidden-lg hidden-xs' />
                <div data-target='fadeInLeft' className='col-xs-12 col-sm-6 col-md-3 item blue-item'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    Companies pay for skills
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Every skill (JS, C ++) costs different money on the labor market. Companies choose the developer level.
                  </div>
                </div>
                <div data-target='fadeInLeft' className='col-xs-12 col-sm-6 col-md-3 item blue-item'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    Internal currency
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Time. Companies pay per each hour of time worked on task using any skill or their combination(JS + Ruby on Rails).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='team'>
          <div className='container team team-style'>
            <div className='row'>
              <div className='section text-center'>
                <h2>TEAM MEMBERS</h2>
              </div>

              <div className='col-sm-3 team-member'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/ilgiz.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Замалеев Ильгиз</h6>
                    <p className='member-post'>developer</p>
                    <hr />
                    <p className='member-details'>ПРофессор И ннополис , участник 15 сорревнований по
                            программирования
                            Победитель 5 из них , и просто ахуенный чувак</p>
                  </div>
                </div>
              </div>
              <div className='col-sm-3 team-member'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/ilgiz.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Замалеев Ильгиз</h6>
                    <p className='member-post'>developer</p>
                    <hr />
                    <p className='member-details'>ПРофессор И ннополис , участник 15 сорревнований по
                            программирования
                            Победитель 5 из них , и просто ахуенный чувак</p>
                  </div>
                </div>
              </div>
              <div className='col-sm-3 team-member'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/ilgiz.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Замалеев Ильгиз</h6>
                    <p className='member-post'>developer</p>
                    <hr />
                    <p className='member-details'>ПРофессор И ннополис , участник 15 сорревнований по
                            программирования
                            Победитель 5 из них , и просто ахуенный чувак</p>
                  </div>
                </div>
              </div>
              <div className='col-sm-3 team-member'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/ilgiz.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Замалеев Ильгиз</h6>
                    <p className='member-post'>developer</p>
                    <hr />
                    <p className='member-details'>ПРофессор И ннополис , участник 15 сорревнований по
                            программирования
                            Победитель 5 из них , и просто ахуенный чувак</p>
                  </div>
                </div>
              </div>
              <div className='section text-center'>
                <h2>ADVISORS</h2>
              </div>
              <div className='col-sm-3 team-member'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/ilgiz.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Замалеев Ильгиз</h6>
                    <p className='member-post'>developer</p>
                    <hr />
                    <p className='member-details'>ПРофессор И ннополис , участник 15 сорревнований по
                            программирования
                            Победитель 5 из них , и просто ахуенный чувак</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='paper'>
          <div className='container'>
            <div className='row'>
              <div className='paper-block'>
                <img src='../../assets/img/programmm.png' />
              </div>
              <div className='paper-block'>
                <span>Paper</span>
                <button className='btn' onClick={() => this.downloadParep()}>DOWNLOAD</button>
              </div>
              <div className='paper-block hidden-xs' id='desc'>
                This is what will help you understand
              </div>
            </div>
          </div>
        </section>
        <section id='feed-triangle' />
        <section id='feed-back'>
          <div className='container'>
            <div className='row'>
              <div data-target='slideInLeft' className='col-sm-6 col-xs-12 feed-item box animated boxHidded'>
                <div className='text-left'><h2>Company</h2></div>
                <div className='form-group'>
                  <div className='input-group'>
                    <input type='text' className='form-control' placeholder='name' aria-describedby='name' />
                    <span className='input-group-addon' id='name'><i className='fa fa-user' /> </span>
                  </div>
                  <div className='input-group '>
                    <input type='text' className='form-control' placeholder='email' aria-describedby='email' />
                    <span className='input-group-addon' id='email'><i className='fa fa-address-book' /> </span>
                  </div>
                  <textarea className='form-control' placeholder='Message' />
                  <button className='btn'>submit</button>
                </div>
              </div>
              <div data-target='slideInRight' className='col-sm-6 hidden-xs feed-item box animated boxHidded'>
                <div className='text-left'><h2>Developer</h2></div>
                <h5>Are you IT developer? Help us improve our system!</h5>
                <br />
                <Link type='button' className='btnnn' to='/developer_test'>Pass the test</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
