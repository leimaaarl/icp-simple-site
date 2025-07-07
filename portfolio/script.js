
const typed = new Typed('#typed', {
  strings: ['Leimarl Doelle Luares.', 'an aspiring developer.', ' a problem solver.', 'ready to build with you!'],
  typeSpeed: 40,
  backSpeed: 25,
  loop: true
});


function showSection(sectionId) {
  const sections = document.querySelectorAll('.tab-content');
  sections.forEach(section => {
    section.style.display = section.id === sectionId ? 'block' : 'none';
  });
}

function showSection(sectionId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (sectionId === 'intro') document.querySelectorAll('.tab-btn')[0].classList.add('active');
  if (sectionId === 'skills') document.querySelectorAll('.tab-btn')[1].classList.add('active');
  if (sectionId === 'experiences') document.querySelectorAll('.tab-btn')[2].classList.add('active');
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}


const tabContents = {
  intro: `
  <div class="about-card">
    <p>
      I enjoy building interactive web and mobile applications as well as dabble in machine learning.<br>
      <span class="aboutme-highlight">Curious</span> by nature, I love learning new technologies and collaborating
      with others to create impactful solutions.
    </p>
    </div>
  `,
  skills: `
  <div class="about-card">
    <ul class="aboutme-skills">
      <li><img src="./images/html5.svg" alt="HTML5" width="28" /> HTML5</li>
      <li><img src="./images/javascript.svg" alt="JavaScript" width="28" /> JavaScript</li>
      <li><img src="./images/react.svg" alt="React" width="28" /> React</li>
      <li><img src="./images/nodedotjs.svg" alt="Node.js" width="28" /> Node.js</li>
      <li><img src="./images/php.svg" alt="PHP" width="28" /> PHP</li>
      <li><img src="./images/mysql.svg" alt="MySQL" width="28" /> MySQL</li>
      <li><img src="./images/sqlite.svg" alt="SQLite" width="28" /> SQLite</li>
      <li><img src="./images/flask.svg" alt="Flask" width="28" /> Flask</li>
      <li><img src="./images/python.svg" alt="Python" width="28" /> Python</li>
      <li><img src="./images/jquery.svg" alt="jQuery" width="28" /> jQuery</li>
      <li><img src="./images/pytorch.svg" alt="PyTorch" width="28" /> PyTorch</li>
    </ul>
    </div>
  `,
  experiences: `
 <div class="about-card">
  <div class="experience-header">
    <h3 class="experience-title">Web Developer Intern</h3>
    <span class="experience-date">February 2025 – June 2025</span>
  </div>
  <div class="experience-blocks">
    <div class="experience-block">
      <p><strong>🔗 Self-Service Feature:</strong><br>
      Developed a cross-matching system for Meraki API Dashboard requests with internal databases, including a webhook-triggered shared secret generator for the Meraki MSP Module in the One-touch Control system.</p>
    </div>
    <div class="experience-block">
      <p><strong>📊 Wallboards Module:</strong><br>
      Built a full-featured module for Wallboards that displays batch report details in a user-friendly list view, complete with configuration options for end-users.</p>
    </div>
    <div class="experience-block">
      <p><strong>⚙️ Dynamic AJAX Integration:</strong><br>
      Engineered interactive AJAX behaviors using Laravel’s DB facade and Symfony’s JsonResponse, creating a modular and scalable front-end/backend bridge for real-time app responsiveness.</p>
    </div>
  </div>
</div>
`
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('aboutme-tab-content').innerHTML = tabContents.intro;
});

function showSection(sectionId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (sectionId === 'intro') document.querySelectorAll('.tab-btn')[0].classList.add('active');
  if (sectionId === 'skills') document.querySelectorAll('.tab-btn')[1].classList.add('active');
  if (sectionId === 'experiences') document.querySelectorAll('.tab-btn')[2].classList.add('active');
  document.getElementById('aboutme-tab-content').innerHTML = tabContents[sectionId];
}


const currentYear = new Date()
document.querySelector(".year").textContent = currentYear.getFullYear();
