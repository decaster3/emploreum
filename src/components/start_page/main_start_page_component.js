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
      </div>
    )
  }
}
