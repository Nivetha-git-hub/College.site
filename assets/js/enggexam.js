let div = document.createElement('div');
div.classList.add('col-lg-3 col-md-4');
let examDiv = document.querySelector('.col-lg-3 col-md-4');


let enggBtn = document.getElementById('engg-btn');
enggBtn.addEventListener('click')

let html = `<section id="engg-exam-details" class="engg-exam-details">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Exams</h2>
                </div>
            <div class="row" data-aos="zoom-in" data-aos-delay="100">
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div class="course-item">
            <img
              src="assets/img/engg2.jpg"
              class="img-fluid"
              alt="..."
            />
            <div class="course-content">
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                
                
              </div>

              <h3>Joint Entrance Exam</h3>
              <h4>JEE</h4>
              <h5 style="color: #5fcf80;"> for +2 student </h5>
              <span>Online Exam</span><br>
              <a href="https://jeemain.nta.nic.in/" class="jee-link">Click here</a>
              
            </div>
          </div>
        </div>
        <!-- End Course Item-->

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
        >
          <div class="course-item">
            <img
              src="assets/img/med2.jpg"
              class="img-fluid"
              alt="..."
            />
            <div class="course-content">
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
               
                
              </div>

              <h3>
                <a href="course-details.html">Medicine</a>
              </h3>
              <p>
                The medical courses are offered in various specialisations which include the medical, biomedical, or paramedical sciences, pharmacy , nursing , allied health, health, etc.
              </p>
              
            </div>
          </div>
        </div>
        <!-- End Course Item-->

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
        >
          <div class="course-item">
            <img
              src="assets/img/arts2.jpg"
              class="img-fluid"
              alt="..."
            />
            <div class="course-content">
              <div class="d-flex justify-content-between align-items-center mb-3">
              
                
                
              </div>

              <h3><a href="course-details.html">Arts</a></h3>
              <p>
                Arts is an assorted stream which includes the study of fine arts, virtual arts, performing arts, literary arts, humanities and social science.
              </p>
             
              </div>
            </div>
          </div>
        </div>
        <!-- End Course Item-->
      </div>
    </div>
    <script src="js/enggexam.js"></script>
  </section>`
  
