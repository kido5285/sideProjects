var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
var date = document.getElementById('day')
date.innerHTML = n;

//data variables
var data = 
{
    data1:/*done*/ {
        name1: '点名',
        name2: '地理',
        name3: '几何',
        name4: '科学',
        name5: '国文历史sejarah',
        name6: '设计与工艺RBT',
        name7: '英文',
        link1: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        link2: 'https://us04web.zoom.us/j/8121469858?pwd=NHFablIvalg2Qmg0d0w4L21iaXlSdz09',
        link3: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        link4: 'https://zoom.us/j/6914301389?pwd=L1dTbEJIbTFTdFp3djFiQWNGelBodz09',
        link5: 'https://meet.google.com/lookup/e46f5gmn3a?authuser=1&hs=179',
        link6: 'https://us04web.zoom.us/j/75501084829?pwd=aUV4ektWbmtsYWNLbFdudGtzM0Izdz09',
        link7: 'https://us04web.zoom.us/j/3269454925?pwd=L0lxSWFmNzlDeTJxb1NoSlVHTTRvdz09',
    },
    data2:/*done*/ {
        name1: '点名',
        name2: '华文',
        name3: '英文会话',
        name4: '国文历史sejarah',
        name5: '科学',
        name6: '几何',
        name7: '国文',
        link1: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        link2: 'http://meet.google.com/rwm-upxt-hsq',
        link3: 'https://us04web.zoom.us/j/3269454925?pwd=L0lxSWFmNzlDeTJxb1NoSlVHTTRvdz09',
        link4: 'https://meet.google.com/lookup/e46f5gmn3a?authuser=1&hs=179',
        link5: 'https://zoom.us/j/6914301389?pwd=L1dTbEJIbTFTdFp3djFiQWNGelBodz09',
        link6: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        link7: 'https://us04web.zoom.us/j/7697337030?pwd=U0lJWFdFODNBMzhUQlBPdDZBOUFsZz09',
    },
    data3:/*done*/ {
        link1: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        name1: '点名',
        link2: 'https://us04web.zoom.us/j/3269454925?pwd=L0lxSWFmNzlDeTJxb1NoSlVHTTRvdz09',
        name2: '英文',
        link3: 'https://meet.google.com/lookup/gvs6uo4dx3?authuser=1&hs=179',
        name3: '设计与工艺RBT',
        link4: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        name4: '几何',
        link5: 'http://meet.google.com/rwm-upxt-hsq',
        name5: '华文',
        link6: 'https://zoom.us/j/6914301389?pwd=L1dTbEJIbTFTdFp3djFiQWNGelBodz09',
        name6: '科学',
        link7: 'https://zoom.us/j/4475267060?pwd=MW43V3dTUEl3aDlGK29JOGV2cmsyUT09',
        name7: '历史',
    },
    data4:/*done*/ {
        name1: '点名',
        name2: '英科',
        name3: '体育',
        name4: '华文',
        name5: '国文',
        name6: '地理',
        name7: '代数',
        link1: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        link2: 'https://zoom.us/j/6914301389?pwd=L1dTbEJIbTFTdFp3djFiQWNGelBodz09',
        link3: 'https://meet.google.com/lookup/htpdz7cy4k?authuser=1&hs=179',
        link4: 'http://meet.google.com/rwm-upxt-hsq',
        link5: 'https://us04web.zoom.us/j/7697337030?pwd=U0lJWFdFODNBMzhUQlBPdDZBOUFsZz09',
        link6: 'https://us04web.zoom.us/j/8121469858?pwd=NHFablIvalg2Qmg0d0w4L21iaXlSdz09',
        link7: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
    },
    data5:/*done*/ {
        name1: '点名',
        name2: '代数',
        name3: '国文',
        name4: '科学',
        name5: '地理',
        name6: '历史',
        name7: '华文',
        link1: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        link2: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        link3: 'https://us04web.zoom.us/j/7697337030?pwd=U0lJWFdFODNBMzhUQlBPdDZBOUFsZz09',
        link4: 'https://zoom.us/j/6914301389?pwd=L1dTbEJIbTFTdFp3djFiQWNGelBodz09',
        link5: 'https://us04web.zoom.us/j/8121469858?pwd=NHFablIvalg2Qmg0d0w4L21iaXlSdz09',
        link6: 'https://zoom.us/j/4475267060?pwd=MW43V3dTUEl3aDlGK29JOGV2cmsyUT09',
        link7: 'http://meet.google.com/rwm-upxt-hsq',
    },
    data6:/*done*/ {
        link1: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09',
        name1: '点名',
        link2: 'https://us04web.zoom.us/j/9629766341?pwd=S3dxVFBBNzYwU1RXRG1PelJmOXhBZz09',
        name2: '音乐',
        link3: 'https://meet.google.com/lookup/d4emz36ual?authuser=1&hs=179',
        name3: '美术',
        link4: 'https://us04web.zoom.us/j/7697337030?pwd=U0lJWFdFODNBMzhUQlBPdDZBOUFsZz09',
        name4: '国文',
        link5: 'https://us04web.zoom.us/j/3269454925?pwd=L0lxSWFmNzlDeTJxb1NoSlVHTTRvdz09',
        name5: '英文',
        link6: '-',
        name6: '-',
        link7: '-',
        name7: '-',
    }
}

//set table variables
var container = document.getElementById('data-container')
var dateNum = d.getDay();
var datedata;
if(dateNum === 1) {
    datedata = data.data1
}
if(dateNum === 2) {
    datedata = data.data2
}
if(dateNum  === 3) {
    datedata = data.data3
}
if(dateNum=== 4) {
    datedata= data.data4
}
if(dateNum === 5) {
    datedata = data.data5
}
if(dateNum === 6) {
    datedata = data.data6
}

container.innerHTML = 
`
    <tr>
        <td>7:30-7:59</td>
        <td>${datedata.name1}</td>
        <td><a href=${datedata.link1} target="_blank">${datedata.link1}</a></td>
    </tr>
    <tr>
        <td>8:00-8:50</td>
        <td>${datedata.name2}</td>
        <td><a href=${datedata.link2} target="_blank">${datedata.link2}</a></td>
    </tr>
    <tr>
        <td>9:00-9:50</td>
        <td>${datedata.name3}</td>
        <td><a href=${datedata.link3} target="_blank">${datedata.link3}</a></td>
    </tr>
    <tr>
        <td>10:15-11:05</td>
        <td>${datedata.name4}</td>
        <td><a href=${datedata.link4} target="_blank">${datedata.link4}</a></td>
    </tr>
    <tr>
        <td>11:15-12:05</td>
        <td>${datedata.name5}</td>
        <td><a href=${datedata.link5} target="_blank">${datedata.link5}</a></td>
    </tr>
    <tr>
        <td>12:45-1:35</td>
        <td>${datedata.name6}</td>
        <td><a href=${datedata.link6} target="_blank">${datedata.link6}</a></td>
    </tr>
    <tr>
        <td>1:45-2:35</td>
        <td>${datedata.name7}</td>
        <td><a href=${datedata.link7} target="_blank">${datedata.link7}</a><div id="line"></div></td>
    </tr>
`