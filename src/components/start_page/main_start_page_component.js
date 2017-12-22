import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase'
import { getTranslation, changeLang } from '../../actions/lang_actions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class MainStartPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      en: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.writeFir = this.writeFir.bind(this)
  }
  handleChange (event) {
    const target = event.target
    const name = target.name
    this.setState({
      [name]: event.target.value
    })
  }
  changeLangHandle (name) {
    var a = this.state.en
    if (name !== this.props.lang.current_lang) {
      this.setState({
        en: !a
      })
      this.props.changeLang(name)
    }
  }
  writeFir () {
    var comanysRef = firebase.database().ref().child('companies')
    comanysRef.push({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }
  componentDidMount () {
    var canvasDiv = document.getElementById('particle-canvas')
    var options = {
      particleColor: '#888',
      interactive: true,
      speed: 'medium',
      density: 'high',
      background: '/assets/img/bg.png'
    }
    var particleCanvas = new ParticleNetwork(canvasDiv, options)
    window.midleTopSection()
  }
  render () {
    let p = this.props
    let s = this.state
    let curL = p.lang.current_lang
    // TODO: СДЕЛАТЬ ДИЗАЙН ЭТИХ ДВУХ ЧЕКБОКСОВ ОТ МИШИ
    return (
      <div className='bodyClass'>
        <input name='en' onClick={() => this.changeLangHandle('en')} type='radio' checked={s.en ? 'checked' : ''} />
        <input name='ru' onClick={() => this.changeLangHandle('ru')} type='radio' checked={!s.en ? 'checked' : ''} />
        <header className='start hidden-xs'>
          <div className='block' data-target='#window' id='header-about'>
            <span>
              {getTranslation(curL, 'about')}
            </span>
          </div>
          <div className='block' data-target='.team-style' id='header-team'>
            <span>
              {getTranslation(curL, 'team')}
            </span>
          </div>
          <div className='block' data-target='.paper-block'>
            <span>
              {getTranslation(curL, 'paper')}
            </span>
          </div>
          <div className='block' data-target='.paper-block'>
            <span>
              {getTranslation(curL, 'technologies')}
            </span>
          </div>
          <div className='block' data-target='#feed-back'>
            <span>
              {getTranslation(curL, 'contact')}
            </span>
          </div>
        </header>
        <section id='top-section'>
          <div id='particle-canvas' />
          <div id='text'>
            <h2>Emploreum</h2>
            <small>
              {getTranslation(curL, 'short_descr')}
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
              {getTranslation(curL, 'intro')}
              <div id='plus'>
                <div data-target='slideInUp' className='col-xs-12 col-sm-6 col-md-3 item blue-item col-xs-12 box animated boxHidded'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    {getTranslation(curL, 'first_plus_n')}
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    {getTranslation(curL, 'first_plus_d')}                  </div>
                </div>
                <div data-target='slideInUp' className='col-xs-12 col-sm-6 col-md-3 item blue-item col-xs-12 box animated boxHidded'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    {getTranslation(curL, 'second_plus_n')}
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    {getTranslation(curL, 'second_plus_d')}
                  </div>
                </div>
                <div className='clearfix hidden-md hidden-lg hidden-xs' />
                <div data-target='slideInUp' className='col-xs-12 col-sm-6 col-md-3 item blue-item col-xs-12 box animated boxHidded'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    {getTranslation(curL, 'third_plus_n')}
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    {getTranslation(curL, 'third_plus_d')}
                  </div>
                </div>
                <div data-target='slideInUp' className='col-xs-12 col-sm-6 col-md-3 item blue-item col-xs-12 box animated boxHidded'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    {getTranslation(curL, 'four_plus_n')}
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    {getTranslation(curL, 'four_plus_d')}
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
                <h2>{getTranslation(curL, 'tm')}</h2>
              </div>

              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/19420703_201049817088653_3083517987539423921_n.jpg?oh=c76a582fc3d2dad6c34c363c2f8ba1ca&oe=5ACFC214' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>{getTranslation(curL, 'rkh')}</h6>
                    <p className='member-post'>{getTranslation(curL, 'rkh_short')}</p>
                    <hr />
                    <p className='member-details'>{getTranslation(curL, 'rkh_long')}</p>
                  </div>
                </div>
              </div>
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/m1.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>{getTranslation(curL, 'mik')}</h6>
                    <p className='member-post'>{getTranslation(curL, 'mik_short')}</p>
                    <hr />
                    <p className='member-details'>{getTranslation(curL, 'mik_long')}</p>
                  </div>
                </div>
              </div>
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/i2.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>{getTranslation(curL, 'ilg')}</h6>
                    <p className='member-post'>{getTranslation(curL, 'ilg_short')}</p>
                    <hr />
                    <p className='member-details'>{getTranslation(curL, 'ilg_long')}</p>
                  </div>
                </div>
              </div>
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/r3.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>{getTranslation(curL, 'rig')}</h6>
                    <p className='member-post'>{getTranslation(curL, 'rig_short')}</p>
                    <hr />
                    <p className='member-details'>{getTranslation(curL, 'rig_long')}</p>
                  </div>
                </div>
              </div>
              <div className='clearfix' />
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/a1.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>{getTranslation(curL, 'ay')}</h6>
                    <p className='member-post'>{getTranslation(curL, 'ay_short')}</p>
                    <hr />
                    <p className='member-details'>{getTranslation(curL, 'ay_long')}</p>
                  </div>
                </div>
              </div>
              <div className='section text-center'>
                <h2>{getTranslation(curL, 'advisors')}</h2>
              </div>
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/g1.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>{getTranslation(curL, 'alg')}</h6>
                    <p className='member-post'>{getTranslation(curL, 'alg_short')}</p>
                    <hr />
                    <p className='member-details'>{getTranslation(curL, 'alg_long')}</p>
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
                <span>{getTranslation(curL, 'w_paper')}</span>
                <a href='../../assets/emploreum.pdf' className='btn' type='button'>{getTranslation(curL, 'click_a_d')}</a>
              </div>
              <div className='paper-block hidden-xs' id='desc'>
                {getTranslation(curL, 'paper_desc')}
              </div>
            </div>
          </div>
        </section>
        <section id='technology' className='hidden-xs'>
          <div className='container'>
            <div className='row'>
              <h2>{getTranslation(curL, 'tech_c')}</h2>
              <div id='circle-orbit'>
                <div id='circle-orbit-container'>
                  <div id='inner-orbit' className='circle'>
                    <div className='mini-orbit-cirlces' id='circle-1' />
                    <div className='mini-orbit-cirlces' id='circle-6' />
                  </div>
                  <div id='middle-orbit' className='circle'>
                    <div className='mini-orbit-cirlces' id='circle-2' />
                    <div className='mini-orbit-cirlces' id='circle-4' />
                  </div>
                  <div id='outer-orbit' className='circle'>
                    <div className='mini-orbit-cirlces' id='circle-3' />
                    <div className='mini-orbit-cirlces' id='circle-5' />
                  </div>
                </div>
              </div>
              <div id='tech-descr'>
                <div className='tech-block top left'>
                  <h4>{getTranslation(curL, 'blockchain')}</h4>
                  <span>
                    {getTranslation(curL, 'blockchain_d')}
                  </span>
                </div>
                <div className='tech-block top right'>
                  <h4>{getTranslation(curL, 'sm_contracts')}</h4>
                  <span>
                    {getTranslation(curL, 'sm_contracts_d')}
                  </span>
                </div>
                <div className='tech-block bottom left'>
                  <h4>{getTranslation(curL, 'big_data')}</h4>
                  <span>
                    {getTranslation(curL, 'big_data_d')}
                  </span>
                </div>
                <div className='tech-block bottom right'>
                  <h4>{getTranslation(curL, 'w_tech')}</h4>
                  <span>
                    {getTranslation(curL, 'w_tech_d')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='feed-triangle' />
        <section id='feed-back'>
          <div className='container'>
            <div className='row'>
              <div data-target='slideInLeft' className='col-sm-6 col-xs-12 feed-item box animated boxHidded'>
                <div className='text-left'><h2>{getTranslation(curL, 'company')}</h2></div>
                <h5>{getTranslation(curL, 'company_motivation')}</h5>
                <div className='form-group'>
                  <div className='input-group'>
                    <input type='text' className='form-control' placeholder='name' aria-describedby='name' name='name' onChange={this.handleChange} value={this.state.name} />
                    <span className='input-group-addon' id='name'><i className='fa fa-user' /> </span>
                  </div>
                  <div className='input-group '>
                    <input type='text' className='form-control' placeholder='email' aria-describedby='email' name='email' onChange={this.handleChange} value={this.state.email} />
                    <span className='input-group-addon' id='email'><i className='fa fa-address-book' /> </span>
                  </div>
                  <textarea className='form-control' placeholder='Message' name='message' onChange={this.handleChange} value={this.state.message} />
                  <button className='btn' onClick={() => this.writeFir()}>{getTranslation(curL, 'submit')}</button>
                </div>
              </div>
              <div data-target='slideInRight' className='col-sm-6 hidden-xs feed-item box animated boxHidded'>
                <div className='text-left'><h2>{getTranslation(curL, 'dev')}</h2></div>
                <h5>{getTranslation(curL, 'dev_motivation')}</h5>
                <br />
                <Link type='button' className='btnnn' to='/developer_test'>{getTranslation(curL, 'pass_t')}</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    lang: state.lang
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ changeLang }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MainStartPage)
