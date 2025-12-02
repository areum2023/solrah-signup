const { useState } = React;

const iconSymbols = {
  building: '🏢',
  users: '👥',
  calendar: '📅',
  package: '📦',
  message: '💬',
  bell: '🔔',
  credit: '💳',
  wrench: '🛠️',
  trend: '📈',
  menu: '☰',
  close: '✕',
  home: '🏠',
  user: '👤',
  settings: '⚙️',
  chevron: '›',
  map: '📍',
  phone: '☎️',
  mail: '✉️',
  clock: '⏰',
  shield: '🛡️',
  zap: '⚡',
};

const EmojiIcon = ({ symbol, label, className = '' }) => (
  <span
    role="img"
    aria-label={label}
    className={`inline-flex items-center justify-center ${className}`.trim()}
  >
    {symbol}
  </span>
);

const KICApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState(3);

  const HomeScreen = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">안녕하세요, 김대표님!</h2>
        <p className="opacity-90">A동 507호 | 스마트제조업</p>
        <div className="mt-4 flex gap-2">
          <div className="bg-white/20 rounded-lg px-3 py-2 backdrop-blur">
            <p className="text-xs opacity-80">관리비 납부일</p>
            <p className="font-bold">매월 25일</p>
          </div>
          <div className="bg-white/20 rounded-lg px-3 py-2 backdrop-blur">
            <p className="text-xs opacity-80">계약 만료</p>
            <p className="font-bold">2026.08</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: 'calendar', label: '시설예약', color: 'blue' },
          { icon: 'credit', label: '관리비', color: 'green' },
          { icon: 'wrench', label: 'A/S신청', color: 'orange' },
          { icon: 'package', label: '택배', color: 'purple' },
          { icon: 'users', label: '커뮤니티', color: 'pink' },
          { icon: 'bell', label: '공지사항', color: 'red' },
          { icon: 'trend', label: '비즈매칭', color: 'indigo' },
          { icon: 'message', label: '채팅', color: 'cyan' },
        ].map((item, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className={`bg-${item.color}-100 p-3 rounded-full mb-2`}>
              <EmojiIcon
                symbol={iconSymbols[item.icon]}
                label={item.label}
                className={`w-6 h-6 text-${item.color}-600`}
              />
            </div>
            <span className="text-xs text-gray-700 font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <EmojiIcon symbol={iconSymbols.bell} label="실시간 공지" className="w-5 h-5 text-red-500" />
            실시간 공지
          </h3>
          <button className="text-sm text-blue-600">전체보기</button>
        </div>
        <div className="space-y-2">
          {[
            { title: '엘리베이터 정기점검', time: '2시간 전', urgent: true },
            { title: '주차장 배수로 공사 안내', time: '5시간 전', urgent: false },
            { title: '신규 입주사 환영', time: '1일 전', urgent: false },
          ].map((notice, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {notice.urgent && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">긴급</span>
                )}
                <span className="text-sm text-gray-700">{notice.title}</span>
              </div>
              <span className="text-xs text-gray-400">{notice.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <EmojiIcon symbol={iconSymbols.package} label="오늘의 택배" className="w-5 h-5 text-purple-600" />
          오늘의 택배
        </h3>
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-purple-600">3개</p>
              <p className="text-sm text-gray-600">미수령 택배</p>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              수령하기
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">이번 달 관리비</h3>
          <span className="text-xs text-gray-500">2024년 11월</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">임대료</span>
            <span className="font-bold">₩2,500,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">관리비</span>
            <span className="font-bold">₩450,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">전기료</span>
            <span className="font-bold">₩280,000</span>
          </div>
          <div className="border-t pt-2 mt-2 flex justify-between">
            <span className="font-bold text-gray-800">총 납부금액</span>
            <span className="font-bold text-blue-600 text-lg">₩3,230,000</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-3">
            바로 납부하기
          </button>
        </div>
      </div>
    </div>
  );

  const CommunityScreen = () => (
    <div className="space-y-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['전체', '공동구매', '비즈니스', '정보공유', '친목'].map((cat, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              idx === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {[
          { title: '사무용품 공동구매 하실 분 🖇️', author: 'B동 305호', comments: 12, likes: 8, time: '10분 전' },
          { title: '점심 도시락 맛집 추천받아요', author: 'A동 702호', comments: 24, likes: 15, time: '1시간 전' },
          { title: '세무 상담 가능한 회계사 계신가요?', author: 'C동 401호', comments: 6, likes: 3, time: '2시간 전' },
          { title: '주차장에서 찾은 차키 주인 찾습니다', author: '관리실', comments: 2, likes: 1, time: '3시간 전' },
        ].map((post, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
            <h4 className="font-bold text-gray-800 mb-2">{post.title}</h4>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.author}</span>
              <div className="flex items-center gap-3">
                <span>💬 {post.comments}</span>
                <span>❤️ {post.likes}</span>
                <span>{post.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-20 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all">
        <span className="text-2xl">+</span>
      </button>
    </div>
  );

  const FacilityScreen = () => (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
        <h2 className="text-xl font-bold mb-2">시설 예약</h2>
        <p className="text-sm opacity-90">회의실, 세미나실, 주차장을 예약하세요</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { name: '대회의실', capacity: '20명', available: true, img: '🏢' },
          { name: '소회의실', capacity: '8명', available: true, img: '💼' },
          { name: '세미나실', capacity: '50명', available: false, img: '🎓' },
          { name: '방문자주차', capacity: '5대', available: true, img: '🅿️' },
        ].map((facility, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-4xl mb-2">{facility.img}</div>
            <h3 className="font-bold text-gray-800 mb-1">{facility.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{facility.capacity}</p>
            {facility.available ? (
              <button className="w-full bg-green-100 text-green-700 py-2 rounded-lg text-sm font-medium">
                예약가능
              </button>
            ) : (
              <button className="w-full bg-gray-100 text-gray-500 py-2 rounded-lg text-sm font-medium" disabled>
                예약불가
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">나의 예약</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">대회의실</p>
              <p className="text-sm text-gray-600">2024.11.29 14:00-16:00</p>
            </div>
            <button className="text-red-600 text-sm">취소</button>
          </div>
        </div>
      </div>
    </div>
  );

  const MyPageScreen = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            김
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">김대표</h3>
            <p className="text-gray-600">A동 507호</p>
            <p className="text-sm text-gray-500">스마트제조업</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">3</p>
            <p className="text-xs text-gray-600">작성글</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-xs text-gray-600">댓글</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">850</p>
            <p className="text-xs text-gray-600">포인트</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        {[
          { icon: 'building', label: '내 호실 정보', color: 'blue' },
          { icon: 'credit', label: '납부 내역', color: 'green' },
          { icon: 'calendar', label: '예약 내역', color: 'purple' },
          { icon: 'wrench', label: 'A/S 신청 내역', color: 'orange' },
          { icon: 'shield', label: '보안 및 개인정보', color: 'red' },
          { icon: 'settings', label: '설정', color: 'gray' },
        ].map((item, idx) => (
          <button
            key={idx}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <div className={`bg-${item.color}-100 p-2 rounded-lg`}>
                <EmojiIcon
                  symbol={iconSymbols[item.icon]}
                  label={item.label}
                  className={`w-5 h-5 text-${item.color}-600`}
                />
              </div>
              <span className="text-gray-800">{item.label}</span>
            </div>
            <EmojiIcon symbol={iconSymbols.chevron} label="자세히" className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>

      <button className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-medium">로그아웃</button>
    </div>
  );

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'facility':
        return <FacilityScreen />;
      case 'mypage':
        return <MyPageScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      <div className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <EmojiIcon symbol={iconSymbols.building} label="지산 토탈케어" className="w-7 h-7 text-blue-600" />
          <div>
            <h1 className="font-bold text-gray-800">지산 토탈케어</h1>
            <p className="text-xs text-gray-500">Smart KIC Solution</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative">
            <EmojiIcon symbol={iconSymbols.bell} label="알림" className="w-6 h-6 text-gray-600" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <EmojiIcon symbol={iconSymbols.menu} label="메뉴" className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-20">{renderScreen()}</div>

      <div className="bg-white border-t fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <div className="grid grid-cols-4 h-16">
          {[
            { id: 'home', icon: 'home', label: '홈' },
            { id: 'facility', icon: 'calendar', label: '시설예약' },
            { id: 'community', icon: 'users', label: '커뮤니티' },
            { id: 'mypage', icon: 'user', label: '마이' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 ${
                activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              <EmojiIcon symbol={iconSymbols[tab.icon]} label={tab.label} className="w-6 h-6" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setSidebarOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-80 bg-white z-30 shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">메뉴</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <EmojiIcon symbol={iconSymbols.close} label="닫기" className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="space-y-2">
              {[
                { icon: 'map', label: '단지 정보', desc: '위치 및 안내' },
                { icon: 'phone', label: '긴급 연락처', desc: '관리실, 보안실' },
                { icon: 'zap', label: '에너지 현황', desc: '전력/수도 사용량' },
                { icon: 'trend', label: '비즈니스 매칭', desc: '입주사 네트워킹' },
                { icon: 'mail', label: '문의하기', desc: '1:1 상담' },
                { icon: 'clock', label: '운영 시간', desc: '시설별 이용시간' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <EmojiIcon symbol={iconSymbols[item.icon]} label={item.label} className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <p className="text-sm font-medium text-gray-800 mb-2">앱 버전</p>
              <p className="text-xs text-gray-600">v2.5.0 (최신버전)</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<KICApp />);
