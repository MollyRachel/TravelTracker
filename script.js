const journeyData = {
  leshan: {
    title: '乐山2日游',
    name: '乐山2日游｜一天炫八顿的小吃天堂',
    desc: '来这里 百年光阴不过举步之间',
    days: '2天',
    places: '17个地点',
    cover: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Leshan%20city%20Sichuan%20China%20beautiful%20scenery%20mountains&image_size=landscape_16_9',
    daysData: [
      {
        day: 'DAY 1',
        count: '8 行程',
        date: '6月15日 周六',
        routes: [
          { type: 'play', name: '乐山大佛', desc: '世界最大的石刻弥勒佛坐像，高达71米，非常壮观。', distance: '8.2千米', time: '28分钟', icon: 'compass', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Leshan%20Giant%20Buddha%20Sichuan%20China%20large%20stone%20carving%20scenic&image_size=landscape_4_3' },
          { type: 'eat', name: '张公桥美食街', desc: '乐山最有名的美食街，各种小吃应有尽有。', distance: '2.8千米', time: '15分钟', icon: 'utensils', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Leshan%20Zhanggongqiao%20food%20street%20Chinese%20snacks%20night&image_size=landscape_4_3' },
          { type: 'play', name: '嘉阳小火车', desc: '世界上唯一还在运营的蒸汽小火车，春天有油菜花美景。', distance: '35千米', time: '1小时', icon: 'train', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Jiayang%20steam%20train%20yellow%20rape%20flower%20field%20spring%20China&image_size=landscape_4_3' },
          { type: 'eat', name: '钵钵鸡', desc: '乐山特色美食，红油汤底配上各种串串。', distance: '1.2千米', time: '8分钟', icon: 'utensils', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Leshan%20Bobo%20Chicken%20skewers%20Sichuan%20cuisine%20spicy&image_size=landscape_4_3' }
        ]
      },
      {
        day: 'DAY 2',
        count: '9 行程',
        date: '6月16日 周日',
        routes: [
          { type: 'play', name: '峨眉山', desc: '中国四大佛教名山之一，风景秀丽，香火旺盛。', distance: '30千米', time: '45分钟', icon: 'mountain', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Emei%20Mountain%20Sichuan%20China%20Buddhist%20temple%20scenic&image_size=landscape_4_3' },
          { type: 'play', name: '报国寺', desc: '峨眉山的门户，历史悠久的佛教寺院。', distance: '0.5千米', time: '5分钟', icon: 'building', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Baoguo%20Temple%20Emei%20Mountain%20Chinese%20Buddhist%20architecture&image_size=landscape_4_3' },
          { type: 'eat', name: '跷脚牛肉', desc: '乐山传统美食，牛肉鲜嫩，汤味鲜美。', distance: '25千米', time: '40分钟', icon: 'utensils', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Leshan%20Qiaojiao%20beef%20hot%20pot%20Chinese%20food&image_size=landscape_4_3' },
          { type: 'play', name: '苏稽古镇', desc: '有着千年历史的古镇，保留了许多古建筑。', distance: '10千米', time: '20分钟', icon: 'landmark', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Suji%20ancient%20town%20Leshan%20traditional%20architecture&image_size=landscape_4_3' }
        ]
      }
    ]
  },
  luzern: {
    title: '卢塞恩一日游',
    name: '卢塞恩一日游｜仿佛抵达了天堂的入口',
    desc: '瑞士最美的城市，湖光山色令人陶醉',
    days: '1天',
    places: '7个地点',
    cover: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Lucerne%20Switzerland%20lake%20mountains%20panorama%20alps&image_size=landscape_16_9',
    daysData: [
      {
        day: 'DAY 1',
        count: '7 行程',
        date: '6月20日 周四',
        routes: [
          { type: 'play', name: '卡佩尔桥', desc: '卢塞恩标志性建筑，欧洲最古老的木桥。', distance: '0.3千米', time: '5分钟', icon: 'bridge', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Chapel%20Bridge%20Lucerne%20Switzerland%20wooden%20bridge%20lake&image_size=landscape_4_3' },
          { type: 'play', name: '狮子纪念碑', desc: '为纪念法国大革命牺牲的瑞士雇佣兵而建。', distance: '0.5千米', time: '8分钟', icon: 'monument', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Lion%20Monument%20Lucerne%20Switzerland%20stone%20carving&image_size=landscape_4_3' },
          { type: 'play', name: '卢塞恩湖', desc: '瑞士第四大湖，周围群山环绕景色绝美。', distance: '2千米', time: '30分钟', icon: 'water', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Lake%20Lucerne%20Switzerland%20beautiful%20mountain%20view&image_size=landscape_4_3' },
          { type: 'eat', name: '瑞士巧克力店', desc: '品尝正宗的瑞士手工巧克力。', distance: '0.2千米', time: '3分钟', icon: 'utensils', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Swiss%20chocolate%20shop%20luxury%20pralines&image_size=landscape_4_3' },
          { type: 'play', name: '瑞吉山', desc: '山峦皇后，可以俯瞰卢塞恩湖和阿尔卑斯山。', distance: '15千米', time: '30分钟', icon: 'mountain', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Mount%20Rigi%20Switzerland%20panoramic%20view%20alps&image_size=landscape_4_3' }
        ]
      }
    ]
  },
  venice: {
    title: '威尼斯一日游',
    name: '威尼斯一日游 | 摇曳在水上的浪漫天堂',
    desc: '水上之都，浪漫与艺术的完美结合',
    days: '1天',
    places: '6个地点',
    cover: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Venice%20Italy%20beautiful%20canal%20gondola%20romantic%20sunset&image_size=landscape_16_9',
    daysData: [
      {
        day: 'DAY 1',
        count: '6 行程',
        date: '6月25日 周二',
        routes: [
          { type: 'play', name: '圣马可广场', desc: '威尼斯的中心广场，被称为欧洲最美的客厅。', distance: '0.5千米', time: '10分钟', icon: 'building', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=St%20Marks%20Square%20Venice%20Italy%20architecture%20tourism&image_size=landscape_4_3' },
          { type: 'play', name: '里亚托桥', desc: '威尼斯最著名的桥梁，横跨大运河。', distance: '0.3千米', time: '5分钟', icon: 'bridge', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Rialto%20Bridge%20Venice%20Italy%20grand%20canal&image_size=landscape_4_3' },
          { type: 'play', name: '贡多拉游船', desc: '乘坐传统贡多拉穿梭于威尼斯水道。', distance: '3千米', time: '45分钟', icon: 'ship', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=gondola%20Venice%20Italy%20canal%20romantic&image_size=landscape_4_3' },
          { type: 'eat', name: '意大利餐厅', desc: '品尝正宗的意大利面和提拉米苏。', distance: '0.4千米', time: '8分钟', icon: 'utensils', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Italian%20restaurant%20pasta%20tiramisu%20food&image_size=landscape_4_3' },
          { type: 'play', name: '穆拉诺岛', desc: '著名的玻璃工艺岛，可以参观玻璃制作过程。', distance: '2千米', time: '20分钟', icon: 'factory', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Murano%20Island%20Venice%20glass%20art&image_size=landscape_4_3' },
          { type: 'play', name: '彩色岛', desc: '以色彩缤纷的房屋闻名，非常适合拍照。', distance: '3千米', time: '25分钟', icon: 'home', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Burano%20Island%20Venice%20colorful%20houses&image_size=landscape_4_3' }
        ]
      }
    ]
  },
  christchurch: {
    title: '基督城一日游',
    name: '基督城一日游｜花园城市的宁静时光',
    desc: '新西兰南岛的明珠，英伦风情与自然美景的完美融合',
    days: '1天',
    places: '5个地点',
    cover: 'https://pitravel.pitravelcdn.com/image/1040g0l0311js1b6cmo0g3pgihu05o7ghql6cnv0',
    daysData: [
      {
        day: 'DAY 1',
        count: '5 行程',
        date: '7月1日 周三',
        routes: [
          { type: 'play', name: '基督城大教堂', desc: '哥特式建筑风格，是基督城的标志性建筑。', distance: '0.5千米', time: '10分钟', icon: 'building', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Christchurch%20Cathedral%20New%20Zealand%20Gothic%20architecture&image_size=landscape_4_3' },
          { type: 'play', name: '雅芳河', desc: '穿城而过的美丽河流，可以乘坐平底船游览。', distance: '0.3千米', time: '5分钟', icon: 'water', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Avon%20River%20Christchurch%20New%20Zealand%20punting&image_size=landscape_4_3' },
          { type: 'play', name: '植物园', desc: '占地30公顷的美丽花园，四季鲜花盛开。', distance: '1千米', time: '15分钟', icon: 'compass', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Christchurch%20Botanic%20Gardens%20beautiful%20flowers%20garden&image_size=landscape_4_3' },
          { type: 'eat', name: '坎特伯雷博物馆', desc: '展示新西兰历史和毛利文化的博物馆。', distance: '0.8千米', time: '12分钟', icon: 'building', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Canterbury%20Museum%20Christchurch%20New%20Zealand&image_size=landscape_4_3' },
          { type: 'play', name: '纸板大教堂', desc: '地震后建造的临时教堂，独特的纸板结构设计。', distance: '0.6千米', time: '8分钟', icon: 'building', image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Cardboard%20Cathedral%20Christchurch%20modern%20architecture&image_size=landscape_4_3' }
        ]
      }
    ]
  }
};

function showJourney(id) {
  const data = journeyData[id];
  if (!data) return;

  document.getElementById('journey-title').textContent = data.title;
  document.getElementById('journey-name').textContent = data.name;
  document.getElementById('journey-desc').textContent = data.desc;
  document.getElementById('journey-days').textContent = data.days;
  document.getElementById('journey-places').textContent = data.places;
  document.getElementById('journey-cover-img').src = data.cover;

  let content = '';
  data.daysData.forEach(dayData => {
    content += `
      <div class="day-section">
        <div class="day-header">
          <div class="day-badge">${dayData.day}</div>
          <div class="day-info">
            <span class="day-count">${dayData.count}</span>
            <span class="day-date">${dayData.date}</span>
          </div>
        </div>
        <div class="route-list">
    `;
    dayData.routes.forEach(route => {
      content += `
        <div class="route-item">
          <div class="route-icon icon-${route.type}">
            <i class="fa-solid fa-${getIcon(route.icon)}"></i>
          </div>
          <div class="route-content">
            <div class="route-header">
              <span class="route-tag tag-${route.type}">${getTypeName(route.type)}</span>
              <h4>${route.name}</h4>
            </div>
            <p class="route-desc">${route.desc}</p>
            <div class="route-meta">
              <span><i class="fa-solid fa-route"></i>${route.distance}</span>
              <span><i class="fa-solid fa-clock"></i>${route.time}</span>
            </div>
          </div>
          <div class="route-image">
            <img src="${route.image}" alt="${route.name}">
          </div>
        </div>
      `;
    });
    content += '</div></div>';
  });

  document.getElementById('journey-content').innerHTML = content;
  document.getElementById('journey-modal').classList.add('active');
}

function closeJourney() {
  document.getElementById('journey-modal').classList.remove('active');
}

function getIcon(icon) {
  const icons = {
    compass: 'compass',
    utensils: 'utensils',
    train: 'train',
    mountain: 'mountain',
    building: 'building',
    landmark: 'landmark',
    bridge: 'bridge',
    monument: 'monument',
    water: 'waves',
    ship: 'ship',
    factory: 'factory',
    home: 'home'
  };
  return icons[icon] || 'circle';
}

function getTypeName(type) {
  const types = {
    play: '游玩',
    eat: '吃喝',
    shop: '购物',
    other: '其他'
  };
  return types[type] || type;
}

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('journey-modal');
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeJourney();
    }
  });
});