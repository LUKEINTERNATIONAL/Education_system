class Bars extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.html" class="site_title"><img src="/production/images/logo.png" width="25px" /> <span>
              ${sessionStorage.getItem('school_type')=='primary' ? 'CCAP Primary' : 'Katoto Secondary'} </span></a>
            </div>

            <div class="clearfix"></div>

            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>General</h3>
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-home"></i> Home <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="/production/school_level/dashboard.html">Dashboard</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-edit"></i>Students<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="/production/school_level/student/student_registration.html">Register Student</a></li>
                      <li><a href="/production/school_level/student/manage_student.html">Manage Student</a></li>
                      <li><a href="/production/school_level/student/manage_attendance.html">Manage Attendance</a></li>
                      <li><a href="/production/school_level/student/manage_assessment.html">Manage Assesment</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-building"></i> Schools <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="/production/school_level/school/manage_school.html">Manage School</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-table"></i> Teachers <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="/production/school_level/teacher/manage_teachers.html">Manage Teachers</a></li>
                      <li><a href="/production/school_level/teacher/manage_transfers.html">Manage Transfers</a></li>
                      <li><a href="/production/school_level/teacher/manage_attendances.html">Manage Attendance</a></li>
                      <li><a href="/production/school_level/teacher/manage_teachers_house.html">Manage Teachers Houses</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-building-o"></i> Infrastructure <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="/production/school_level/infrastructure/manage_infrastructure.html">Manage Infrastructure</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa fa-user"></i>System Users <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="/production/school_level/users/manage_user.html">Manage users</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="menu_section">
                <h3>Other</h3>
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-file"></i> Reports <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="#">Cohort Report</a></li>
                      <li><a href="/production/school_level/reports/statistical_returns.html"> Statistical Returns</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-cog"></i> System Settings <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="/production/school_level/settings/manage_terms.html">Manage terms</a></li>
                      <li><a href="/production/school_level/settings/manage_classes.html">Manage Classes</a></li>
                      <li><a href="/production/school_level/settings/manage_subjects.html">Manage Subjects</a></li>
                      <li><a href="/production/school_level/settings/manage_bursary.html">Manage Bursary</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="/production">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>
              <nav class="nav navbar-nav">
              <ul class=" navbar-right">
                <li class="nav-item dropdown open" style="padding-left: 15px;">
                  <a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                    <img src="/production/images/user.png" alt=""> Petros kayange
                  </a>
                  <div class="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item"  href="javascript:;"> Profile</a>
                      <a class="dropdown-item"  href="javascript:;">
                        <span class="badge bg-red pull-right">50%</span>
                        <span>Settings</span>
                      </a>
                  <a class="dropdown-item"  href="javascript:;">Help</a>
                    <a class="dropdown-item"  href="login.html"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
                  </div>
                </li>

                <li role="presentation" class="nav-item dropdown open">
                  <a href="javascript:;" class="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul class="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item">
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <div class="text-center">
                        <a class="dropdown-item">
                          <strong>See All Alerts</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->
        `
    }
}

class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="main-footer">
            <strong>Copyright &copy; ${new Date().toISOString().slice(0, 4)} <a href="">Education</a>.</strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
            <b>Version</b> 1.0.0
            </div>
        </footer>
        `
    }
}
customElements.define('app-footer',Footer)
customElements.define('app-bars',Bars)

var base_url = "http://0.0.0.0:8000/"

function logout(){
  sessionStorage.setItem("Authorization","")
  sessionStorage.setItem("name","")
  sessionStorage.setItem("username","")
  sessionStorage.setItem("is_superuser","")
  window.location = "/pages/login.html"
}
