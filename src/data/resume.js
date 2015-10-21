var async = require('async');

var keywordsJSON = require('../data/keywords.json');

var keywordsConcat = [];

function produceKeywords() {
    async.forEachOf(keywordsJSON, function(value, key, callback, err){
        if (err) console.error(err);
        try {
            keywordsConcat.push(keywordsJSON[key]);
        }
        catch (e) {
            return callback(e);
        }
        callback();
    }, function (err) {
        if (err) console.error(err.message);
    });
}produceKeywords();

var d = new Date();
var y = d.getFullYear();
var firstName = 'Sajjad',
    lastName = 'Hossain',
    description = 'Novelist, Artisan, Entrepreneur',
    host = 'http://cv.sajjad.nyc',
    git = 'https://github.com/sajjadhossain/resume-builder',
    website = 'http://metaterran.com',
    email = 'sajjad@withpulp.com',
    phone = '347-661-3441',
    title = firstName + ' ' + lastName + ' | ' + description,
    keywords = keywordsConcat.join(),
    logo = 'images/logo.png',
    templates = {
        resumeHeader: 'card-panel ' + '#ff7043 deep-orange lighten-1 z-depth-1',
        objectiveHeader: 'card-panel ' + '#fbe9e7 deep-orange lighten-5 z-depth-1',
        contactHeader: 'card-panel ' + '#ff7043 deep-orange z-depth-1' + ' center',
        skillsHeader: 'card-panel ' + 'f4511e deep-orange darken-2' + ' center',
        educationHeader: 'card-panel ' + '#e64a19 deep-orange darken-3 z-depth-1',
        experienceHeader: 'card-panel ' + '#bf360c deep-orange darken-4',
        footer: 'page-footer ' + '#e65100 orange darken-4 z-depth-1',
        footerHeader: 'card-panel ' + '#bf360c deep-orange darken-4 z-depth-1',
        footerCopyright: 'footer-copyright ' + '#bf360c deep-orange darken-4',
        cards: 'card-panel ' + '#fbe9e7 deep-orange lighten-5 z-depth-1',
        progressOut: 'progress ' + '#ffab91 deep-orange lighten-3',
        progressIn: 'determinate ' + '#dd2c00 deep-orange accent-4',
        modalButtons: 'waves-effect waves-light btn modal-trigger btn-large ' + '#dd2c00 deep-orange accent-4',
        submitButton: 'waves-effect waves-light btn-large ' + '#dd2c00 deep-orange accent-4'
    },
    skills = {
        SKILL1: {
            name: 'Full Stack',
            tags: 'NodeJS, MeteorJS, MongoDB, Express, UnderscoreJS, Browserify, CoffeeScript, npm, Bower',
            percent: '85' + '%'
        },
        SKILL2: {
            name: 'User Experience',
            tags: 'MaterialCSS, Foundation, Bootstrap, HTML5, CSS3, Invision, Photoshop, Illustrator, OmniGraph',
            percent: '90' + '%'
        },
        SKILL3: {
            name: 'Automation',
            tags: 'Mocha, Chai, Jasmine, Behat, PHPUnit, NodeUnit, Selenium, WebDriverIO, Karma, PhantomJS, CasperJS',
            percent: '100' + '%'
        },
        SKILL4: {
            name: 'Deployment',
            tags: 'Jenkins, TravisCI, BuildBot, Docker, Vagrant, Chef, Puppet, AWS, Linode, Digital Ocean',
            percent: '75' + '%'
        }
    },
    resume = {
        JOB1: {
            name: 'WithPulp',
            position: 'Co-Founder',
            duration: 'PRESENT',
            location: 'Astoria, NY',
            site: 'http://withpulp.com',
            logo: 'images/withpulp.png',
            plus: {},
            description: "As if being close friends and bandmates with tacks as sharp as <a href=\"http://husammachlovi.com\">@Husam</a>, <a href=\"http://biodegradablegeek.com\">@Isam</a> and <a href=\"http://damirvazgird.com\">@Damir</a> wasn't enough, we recently collaborated to co-find a digital agency. We all wear multiple hats, teaming up time-to-time with other super friends working on a wide-range of projects.",
            bullets: "<li class=\"my-list-item\">Contribute to design, branding, code and serving client solutions that range from games, to mobile apps, including web applications and branding/marketing campaigns.</li><li class=\"my-list-item\">Build internal tools to accelerate processes, automate systems and produce reliable services, like internal JIRA plugins and Scope-Of-Work document generators.</li><li class=\"my-list-item\">Architected and coded a contestant voting system for AMC's WeTV Network show: <a href=\"http://www.wetv.com/shows/match-made-in-heaven\">Match Made in Heaven</a>.</li><li class=\"my-list-item\">Consulted and worked with various non-profits to design software solutions that meet their needs.</li><li class=\"my-list-item\">Created a functionally rich and reliable web application for wholesale powerhouse since 1975: <a href=\"http://rubyblanc.com/\">Ruby Blanc</a>.</li>"
        },
        JOB2: {
            name: 'Adcade',
            position: 'Automation Engineer',
            duration: 'PRESENT',
            location: 'Chelsea, NY',
            site: 'http://adcade.com',
            logo: 'images/adcade.png',
            plus: {},
            description: "<p>With an ad building platform engineered from next generation HTML5 technology, Adcade empowers users to create and produce one interactive, response—inducing and highly measurable ad experience that cascades seamlessly across all devices, browsers, placements and sizes, responsively.</p>",
            bullets: "<li class=\"my-list-item\">Create customized, versatile and maintainable frameworks to test components, applications and API's.</li><li class=\"my-list-item\">Script tests that evaluate HTML Canvas ad units generated by Epoch™, the highly-anticipated interactive development environment, that helps developers and designers alike to deploy integrated bundles to an ad server.</li><li class=\"my-list-item\">Built a JavaScript  framework that can be used to create and execute robust user-acceptance &amp; end-to-end tests against Epoch™, using Webdriverio, a JavaScript Selenium binding.</li><li class=\"my-list-item\">Mastered Docker/Vagrant, Jenkins/Travis, Mocha, Chai, Jasmine, Node and more by creating this framework, which includes reporting, continuous integration and a dashboard for the business and engineering team</li>"
        },
        JOB3: {
            name: 'Amplify',
            position: 'Automation Engineer',
            duration: '\'13 TO \'14',
            location: 'Chelsea, NY',
            site: 'http://amplify.com',
            logo: 'images/amplify.png',
            plus: {
                info: 'News Corp. Subsidiary'
            },
            description: "<p>Amplify is reimagining the way teachers teach and students learn. We enable teachers to manage whole classrooms and, at the same time, empower them to offer more personalized instruction, so that students become more active, engaged learners.</p>",
            bullets: "<li class=\"my-list-item\">Supervised &amp; assisted in Amplify's initial customer-facing release to 12 districts across the U.S. Analyzed and revisited use cases, code and data to improve the usability, functionality and responsiveness of our Curriculum Application, eBook Library, Games, Simulation, SSO &amp; API.</li><li class=\"my-list-item\">Improved Android and iOS provisioning process by 70%, through Apple Configurator, Automator &amp; ADB scripting, while addressing security/PII concerns and corporate guidelines.</li><li class=\"my-list-item\">Helped establish the Release Management Team, defining release, hot-fix, branching and versioning processes using Git, Jenkins and AWS Beanstalk.</li><li class=\"my-list-item\">Scripted automation &amp; manual tests for integration, security, API’s, hot-fixes, Web Apps, Native Mobile Apps, Simulations &amp; Games, using tools like Behat, SOASTA, Cucumber, LoadUI, JMeter &amp; Selenium.</li><li class=\"my-list-item\">Defined UAT/E2E practices. Built and maintained frameworks for automation testing, including environment configurations, provisioning processed, code promotion &amp; issue triaging.</li><li class=\"my-list-item\">Lead knowledge transfer sessions  with QA Engineers and developers on topics like Behat, SauceLabs, JMeter, Charles, Jasmine, Karma, Protractor and Jenkins.</li><li class=\"my-list-item\">Queried and validated data using  mySQL, SQL, PostgreSQL, noSQL &amp; JSON (MongoDB, Node.js). Created SQL scripts against production environments to resolve dynamic errors that were “show-stoppers”.</li><li class=\"my-list-item\">Parsed Apache, CDN &amp; RDS error logs for test data and reproducibility.</li>"
        },
        JOB4: {
            name: 'ComiXology',
            position: 'Automation Engineer',
            duration: '\'11 TO \'13',
            location: 'Midtown, NY',
            site: 'http://comixology.com',
            logo: 'images/comix.png',
            plus: {
                info: 'Amazon Inc. Subsidiary'
            },
            description: "<p>ComiXology's Guided View reading technology transforms the comic book medium into an immersive and cinematic experience, helping comiXology become a top ten grossing iPad app in 2011 and 2012 and the top grossing non-game iPad app in 2012 and 2013.</p>",
            bullets: "<li class=\"my-list-item\">Managed requirements, development, test plan and submission of Comics to Windows 8, introducing our application to an uncharted platform.</li>\n<li class=\"my-list-item\">Produced automated test scripts that verify functional expectations for features using Behat &amp; MonkeyTalk.</li>\n<li class=\"my-list-item\">Integrated automation suite with Jenkins. Established deployment procedures, Hot-Fix (code emergency) procedures, branching procedures, environments, and ticketing procedures.</li>\n<li class=\"my-list-item\">Developed test plans, test cases, user-stories and acceptance criteria for products, for the top-grossing and top-selling iOS App, Comics, Comics and Client Web and Mobile Apps, the highly-anticipated comiXology Submit platform.</li>\n<li class=\"my-list-item\">Improved areas like device management and load testing. Implemented JMeter on multiple EC2 instances to simulate virtual load for the International Web Store.</li>\n<li class=\"my-list-item\">Significantly improved White-Label product turnaround for Comics framework by documenting and automating feature acceptance criteria, smoke tests, unit tests, API tests and regression tests.</li>"
        },
        JOB5: {
            name: 'ALLHDD',
            position: 'QA Engineer',
            duration: '\'08 TO \'11',
            location: 'Woodside, NY',
            site: 'http://allhdd.com',
            logo: 'images/allhdd.png',
            plus: {},
            description: "Servicing the hardware industry since 2007. Dedicated to bringing the lowest prices in wholesale, retail and subscription orders for your computer, network, server and power hardware needs.",
            bullets: "<li class=\"my-list-item\">Documented test plans, test cases, technical requirements and customer expectations for clientele, QA team and development team.</li>\n<li class=\"my-list-item\">Analyzed business documentation for areas of concern and discrepancies prior to implementation and established Acceptance Criteria based on expectations.</li>\n<li class=\"my-list-item\">Tested web products, applications and forms.</li>\n<li class=\"my-list-item\">Migrated projects from legacy in-house issue tracker to JIRA.</li>\n<li class=\"my-list-item\">Assisted clients in performing User Acceptance Tests and resolve client issues during maintenance phases.</li>"
        }
    },
    education = {
        SCHOOL1: {
            name: 'LaGuardia Community College',
            duration: '\'07 TO \'11',
            focus: 'Business Administration',
            location: 'Long Island City, NY',
            plus: {}
        },
        SCHOOL2: {
            name: 'Barnard College',
            duration: 'SUMMER OF \'11',
            focus: 'Biology',
            location: 'Morningside Heights, NY',
            plus: {
                info: 'Intercollegiate Program'
            }
        }
    },
    data = {
        firstName: firstName,
        lastName: lastName,
        host: host,
        website: website,
        git: git,
        email: email,
        phone: phone,
        skills: skills,
        education: education,
        keywords: keywords,
        description: description,
        title: title,
        year: y,
        logo: logo,
        templates: templates,
        resume: resume
    };

console.log(JSON.stringify(data));
