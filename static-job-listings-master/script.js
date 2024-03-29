const jobListingJSON = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

const getTagHTML = (tag, tagClass = 'tag') => {
    var html = `<span class="${tagClass}">${tag}</span>`
    return html;
}


const getjobListingHTML = (jobData, filterTags = []) => {
    let checkFeatured1 = jobData.featured ? "featured" : "";
    let checkFeatured2 = jobData.featured ? "flex" : "none";    
    let checkNew = jobData.new ? "flex" : "none";
    let jobsTags = '###get tag'
    let jobsListingsHTML = `
    <div class="item ${checkFeatured1}" id="item" data-details="Frontend Senior HTML CSS JavaScript ">
        <div class="column1">
          <img src="${jobData.logo}" alt="${jobData.company}">
          <div class="rows">
            <div class="row1">
                <span>${jobData.company}</span>
                <div class="new" style="display: ${checkNew}">new!</div>
                <div class="feature" style="display: ${checkFeatured2}">featured</div>
            </div>
            <div class="row2">
                <h1>${jobData.position}</h1>
            </div>
            <div class="row3">
            <ul>
                <li>${jobData.postedAt}</li>
                <li>${jobData.contract}</li>
                <li>${jobData.location}</li>
            </ul>
            </div>
          </div>
        </div>
        <hr>
        <div class="tags">
          ${jobsTags}    
        </div>
    </div>
    `
    const tagsArray = [
        jobData.role,
        jobData.level,
        ...(jobData.languages || []),
        ...(jobData.tools || [])
    ]

    const passesFilter = !filterTags.length || filterTags.every(tag => (
      tagsArray.includes(tag)
    ));
    if(!passesFilter) {
      return '';
    }

    const tagsString = tagsArray.reduce((acc, currentTag) => {
      return acc + getTagHTML(currentTag)
    }, '')

    return jobsListingsHTML.replace(jobsTags, tagsString);
};



function toggleClass(el, className) {
  if(el.classList.contains(className)) {
    el.classList.remove(className)
    return;
  } 
  el.classList.add(className)
}

function getSearchbarTags(tagValue, searchContentEl) {
  let searchBarTags = Array.from(searchContentEl.children)
  .map(node => node.textContent)
  .filter(tag => !!tag);
  if(searchBarTags.includes(tagValue)) {
    searchBarTags = searchBarTags.filter(tag => tag !== tagValue)
  } else {
    searchBarTags = [...searchBarTags, tagValue]
  }
  
  return searchBarTags;
}

function setJobsListing(filterTags) {
  const jobsListingsHTML = jobListingJSON.reduce((acc, currentListing) => {
    return acc + getjobListingHTML(currentListing, filterTags);
  }, '');

  document.getElementById("items").innerHTML = jobsListingsHTML;
}


window.addEventListener('click', (event) => {
  const targetEl = event.target;
  const tagValue = targetEl.innerHTML;
  const tagClasses = ['tag', 'close-tag']

  if(!tagClasses.some(c => targetEl.classList.contains(c))) {
    return;
  }
  const searchContentEl = document.getElementById('search-tags');
  const searchBarTags = getSearchbarTags(tagValue, searchContentEl);

  if(searchBarTags.length) {
    document.querySelector('.filter').classList.remove('search-hidden')
  } else {
    document.querySelector('.filter').classList.add('search-hidden')
  }

  searchContentEl.innerHTML = searchBarTags.reduce((acc, current) => {
    return acc + getTagHTML(current, 'close-tag')
  }, '');
  
  toggleClass(targetEl, 'tag-active');
  setJobsListing(searchBarTags)
})

setJobsListing();