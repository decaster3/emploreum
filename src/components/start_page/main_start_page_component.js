import React, { Component } from 'react'

export default class MainStartPage extends Component {
  render () {
    return (
      <div className='bodyClass'>
        <header className='start hidden-xs'>
          <div className='block' id='header-about'>
            <span>
              <div className='text'>about</div>
            </span>
          </div>
          <div className='block' id='header-team'>
            <span>
              <div className='text'>
                TEAM
              </div>
            </span>
          </div>
          <div className='block' id='header-step'>
            <span>
              <div className='text'>
                steps
              </div>
            </span>
          </div>
          <div className='block'>
            <span>
              <div className='text' id='header-ico'>
                ico
              </div>
            </span>
          </div>
          <div className='block'>
            <span>
              <div className='text' id='header-contact'>
                contact
              </div>
            </span>
          </div>
        </header>
        <section id='top-section'>
          <div id='particle-canvas' />
          <div id='text'>
            <h2>Emploreum</h2>
            <small>
              Education, work experience, skills in It - one token in the block. The revolution in the selection of IT
              workers
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
                                summary
                  </div>
                  <div className='col-xs-12 ' id='text'>
                                unique token-resume. Anyone can create his work book in
                                blockhouse, in
                                which reflects the level of specific developer skills, work experience, education,
                                certificates.
                  </div>
                </div>
                <div data-target='fadeInLeft' className='col-xs-12 col-sm-6 col-md-3 item blue-item'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    employment contract
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Escrow smart contracts instead of a labor contract. Jobs are
                    smart contract,
                    with the requirement for work experience, and the level of certain skills.
                  </div>
                </div>
                <div className='clearfix hidden-md hidden-lg hidden-xs' />
                <div data-target='fadeInLeft' className='col-xs-12 col-sm-6 col-md-3 item blue-item'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                      Scils
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Companies pay for their skills. Each skill (JS, C ++)
                    costs different money in the labor market. Companies choose the developer level.
                  </div>
                </div>
                <div data-target='fadeInLeft' className='col-xs-12 col-sm-6 col-md-3 item blue-item'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    currency
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Internal currency. Time. Companies are paid for every hour worked
                    time on any skill or their combination (JS + Ruby on Rails).
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
                <img src='img/programmm.png' />
              </div>
              <div className='paper-block'>
                <span>Paper</span>
                <button className='btn'>DOWNLOAD</button>
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
              <div data-target='slideInLeft' className='col-sm-6 col-xs-12 feed-item box animated'>
                <div className='text-left'><h2>Contacts</h2></div>
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
              <div data-target='slideInRight' className='col-sm-6 hidden-xs feed-item box animated'>
                T is the most developing region in the world. The search for
                qualified employees requires tremendous efforts. We break the
                recruitment industry. Emploreum is a bridge between IT
                companies and specialists. Distributed system for the search
                for employees and the conclusion of labor contracts in the
                field of IT on the basis of Ethereum block. The whole history
                of the employee's work, his education, the current level of
                knowledge in certain areas of IT is an employee's token that can be
                used anywhere. Both employees and companies have a rating. The system
                decides how much it costs to work an employee, relative to his token,
                competition for this vacancy, location of residence, and the company that employs it.
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
