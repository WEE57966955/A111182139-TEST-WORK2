import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Anchor, 
  Award, 
  Briefcase, 
  ChevronDown, 
  Cpu, 
  FileText, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Ship,
  Navigation,
  CheckCircle2,
  BookOpen,
  Plane,
  Video,
  Image as ImageIcon,
  ExternalLink,
  X,
  Sparkles
} from "lucide-react";

const STAGGER_CHILDREN = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'travel',
      title: '2026 清明連假旅遊規劃',
      date: '2026.04.03 - 04.06',
      description: '台南 x 高雄：4天3夜府城古蹟與港都新生地標之旅。包含每日詳細行程與預算分析。',
      url: '', // Using internal content
      icon: Plane,
      color: 'blue',
      details: {
        budget: [
          { name: '連假住宿費用', value: 8500, color: '#c2410c' },
          { name: '質感飲食支出', value: 5250, color: '#15803d' },
          { name: '高鐵/台鐵車資', value: 2900, color: '#b45309' },
          { name: '雜支與預備金', value: 2000, color: '#0f172a' },
          { name: '展覽門票活動', value: 1489, color: '#7c2d12' },
        ],
        days: [
          {
            day: 'Day 1',
            date: '4/3 (FRI)',
            title: '府城古蹟與藥膳之夜',
            items: [
              { time: '10:30', activity: '高鐵抵達台南', cost: '$1,350', desc: '從台北搭乘高鐵南下（全票價）。' },
              { time: '12:30', activity: '花庭午餐', cost: '$800', desc: '享用高質感中式料理，洗去舟車勞頓的疲憊。' },
              { time: '14:00', activity: '西市場 / 林百貨', cost: '$0', desc: '百年古蹟建築巡禮，搭乘復古指針電梯至頂樓參觀。' },
              { time: '19:30', activity: '博仁堂藥膳晚餐', cost: '$600', desc: '坐在百年中藥行品嚐藥膳（必比登推薦）。' },
              { time: '21:00', activity: '中西區老宅民宿', cost: '$2,500', desc: '入住隱身巷弄的質感老宅。' }
            ]
          },
          {
            day: 'Day 2',
            date: '4/4 (SAT)',
            title: '綠色生態與無菜單饗宴',
            items: [
              { time: '08:30', activity: '金得春捲', cost: '$100', desc: '清明節應景必吃的傳統潤餅。' },
              { time: '10:00', activity: '四草綠色隧道', cost: '$200', desc: '搭乘竹筏欣賞絕美的紅樹林生態。' },
              { time: '13:00', activity: '安平古堡 / 樹屋', cost: '$100', desc: '漫步安平老街，參觀歷史古蹟。' },
              { time: '15:00', activity: '文章牛肉湯午餐', cost: '$400', desc: '台南溫體牛代表，飽足感滿分。' },
              { time: '19:00', activity: '筑馨居 (無菜單)', cost: '$900', desc: '清代百年老厝私廚（需預約）。' }
            ]
          },
          {
            day: 'Day 3',
            date: '4/5 (SUN)',
            title: '藝文洗禮與雙城移動',
            items: [
              { time: '09:30', activity: '奇美博物館', cost: '$580', desc: '參觀 2026 年度重量級埃及特展。' },
              { time: '12:30', activity: '十鼓仁糖文創園區', cost: '$509', desc: '體驗百年糖廠改造的工業風與極限設施。' },
              { time: '16:30', activity: '移動至高雄 (區間車)', cost: '$60', desc: '從小南火車站搭乘台鐵區間車直達新左營。' },
              { time: '19:00', activity: '碳佐麻里 (燒肉)', cost: '$1,800', desc: '朝聖燒肉南霸天！享用頂級和牛。' },
              { time: '21:00', activity: '亞灣區海景飯店', cost: '$3,500', desc: '入住高雄港灣，欣賞流音中心夜景。' }
            ]
          },
          {
            day: 'Day 4',
            date: '4/6 (MON)',
            title: '港都海風與最新地標',
            items: [
              { time: '09:30', activity: '旗津渡輪 / 燈塔', cost: '$100', desc: '搭乘渡輪前往旗津，俯瞰高雄港。' },
              { time: '12:30', activity: '早迷鹿早午餐', cost: '$500', desc: '享受網美風格的質感早午餐。' },
              { time: '14:30', activity: 'LaLaport 鳳山店', cost: '$0', desc: '搶先開箱 2026 高雄最新落成日系地標。' },
              { time: '16:00', activity: '老江紅茶', cost: '$150', desc: '返程輕食：古早味紅茶牛奶與火腿蛋吐司。' },
              { time: '17:30', activity: '高鐵抵達台北', cost: '$1,490', desc: '帶著滿載的美好回憶賦歸。' }
            ]
          }
        ]
      }
    },
    {
      id: 'ai-video',
      title: 'AI 創意影片展示',
      date: '2026.03.23',
      description: '使用 Minimax | Hailuo AI 生成的動態影像，探索 AI 在視覺敘事上的無限潛力。',
      url: 'https://sites.google.com/nkust.edu.tw/a111182139-work/%E9%A6%96%E9%A0%81/323ai%E5%BD%B1%E7%89%87?authuser=0',
      icon: Video,
      color: 'indigo'
    },
    {
      id: 'ai-image',
      title: '3/14 AI 3D 模型',
      date: '2026.03.14',
      description: '透過 Tripo3D AI 生成的高品質 3D 模型圖示，展現數位技術與美學的結合。',
      url: 'https://studio.tripo3d.ai/3d-model/608c9c9d-5a4d-435f-933c-9cd27e0494e5?invite_code=03ER8L',
      icon: ImageIcon,
      color: 'teal'
    }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
              <Anchor className="w-6 h-6" />
            </div>
            <span className="font-bold tracking-tight text-xl text-slate-900">
              吳衫憲 <span className="text-blue-600 font-medium text-sm ml-1">Wu Shan-hsien</span>
            </span>
          </div>
          
            <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-500 uppercase tracking-widest">
              <button onClick={() => scrollTo('hero')} className="hover:text-blue-900 transition-colors">首頁</button>
              <button onClick={() => scrollTo('autobio')} className="hover:text-blue-900 transition-colors">自傳</button>
              <button onClick={() => scrollTo('experience')} className="hover:text-blue-900 transition-colors">經歷</button>
              <button onClick={() => scrollTo('showcase')} className="hover:text-blue-900 transition-colors">作品集</button>
              <button onClick={() => scrollTo('skills')} className="hover:text-blue-900 transition-colors">技能</button>
            </div>

          <a 
            href="mailto:a111182139@nkust.edu.tw"
            className="px-6 py-3 bg-blue-900 text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-all hover:shadow-xl hover:shadow-blue-900/20 flex items-center gap-2 group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            聯絡我
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.03),transparent)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-32 h-32 bg-white rounded-3xl mx-auto mb-10 flex items-center justify-center shadow-2xl shadow-blue-900/10 border border-slate-100 rotate-3"
          >
            <Ship className="w-16 h-16 text-blue-900 -rotate-3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              探索導航的 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">專業境界</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              目前就讀於國立高雄科技大學航業技術系。專注於現代航海技術、船舶營運與海上安全管理，致力成為卓越的航海專業人才。
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-100">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-900" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">所在地</p>
                <p className="text-sm font-bold text-slate-700">台灣, 高雄市</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-100">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-blue-900" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">教育程度</p>
                <p className="text-sm font-bold text-slate-700">NKUST 航業技術系</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <button 
              onClick={() => scrollTo('autobio')}
              className="group flex flex-col items-center gap-2 text-slate-400 hover:text-blue-900 transition-colors uppercase text-[10px] tracking-[0.2em] font-bold"
            >
              Start Journey
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Autobiography Section */}
      <section id="autobio" className="py-32 px-6 bg-white relative overflow-hidden text-slate-900">
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-[0.02]">
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 text-slate-900">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-1 bg-blue-900 rounded-full" />
            <span className="text-blue-900 font-black uppercase tracking-[0.3em] text-xs">Self Portrait</span>
          </div>
          <h2 className="text-5xl font-black mb-16 text-slate-900 tracking-tight italic">自傳 <span className="text-blue-100 font-outline-2 not-italic">Autobiography</span></h2>
          
          <div className="grid gap-16 text-slate-900">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10"
            >
              <div className="md:w-1/3">
                <div className="sticky top-32">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 underline decoration-blue-500 decoration-4 underline-offset-4">啟航：背景與初衷</h3>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider italic">Origins & Passion</p>
                </div>
              </div>
              <div className="md:w-2/3 text-lg text-slate-600 leading-relaxed space-y-6">
                <p>
                  自幼我便對一望無際的海洋充滿了無限的好奇與嚮往。海洋不僅僅是地球的生命之源，更是連接世界各地的藍色公路。在國立高雄科技大學航運技術系的求學歲月中，這份好奇心轉化成了對專業技術的嚴謹追求。
                </p>
                <p>
                  我選擇航技系，是因為我享受那種掌握方向感與在海浪中前行的挑戰。在學期間，我深入鑽研航海學、地文航海與天文航海，從中體會到精確對航行安全的重要性。
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10"
            >
              <div className="md:w-1/3">
                <div className="sticky top-32">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 underline decoration-blue-500 decoration-4 underline-offset-4">航程：學術與實作</h3>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider italic">Academic Journey</p>
                </div>
              </div>
              <div className="md:w-2/3 text-lg text-slate-600 leading-relaxed space-y-6">
                <p>
                  在國立高雄科技大學航運技術系的求學過程中，我深刻體會到海洋的廣闊與航運在全球貿易中的核心地位。從基礎的航海學、船舶構造到複雜的電子海圖與自動雷達避碰輔助裝置（ARPA），每一門學科都引發我極大的興趣。
                </p>
                <p>
                  我重視實務。除了課堂上的理論學習，我積極利用學校的模擬機房進行各種惡劣海況下的航行模擬。透過反覆的練習，我學會了如何判斷雷達回跡，並熟悉電子海圖系統（ECDIS）的操作流程。
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10"
            >
              <div className="md:w-1/3">
                <div className="sticky top-32">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 underline decoration-blue-500 decoration-4 underline-offset-4">望遠：未來的願景</h3>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider italic">Future Vision</p>
                </div>
              </div>
              <div className="md:w-2/3 text-lg text-slate-600 leading-relaxed space-y-6">
                <p>
                  我已做好準備，將以飽滿的熱情與專業的技術，迎接未來的職業挑戰。面對全球化與自動化船舶的興起，我期許自己不只是一名優秀的船員，更是一名具備國際視野的專業人才。
                </p>
                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 mt-8">
                  <p className="text-blue-900 font-bold italic">「大海從不給弱者第二次機會，專業是我唯一的承諾。」</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-900 text-xs font-black uppercase tracking-widest mb-6">
              <Briefcase className="w-3 h-3" /> Professional Journey
            </div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">打工與實習經歷</h2>
            <p className="text-slate-500 mt-4 max-w-xl">結合學術理論與實務職場，在累積經驗中不斷突破自我。</p>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-24 relative">
              {/* Experience 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-0"
              >
                <div className="md:w-1/2 md:pr-16 md:text-right flex flex-col md:items-end">
                  <span className="text-blue-600 font-black text-sm uppercase tracking-widest mb-2">2025 ~ 現在</span>
                  <h3 className="text-2xl font-black text-slate-900">打工實習生</h3>
                  <div className="mt-6 flex flex-wrap gap-2 md:justify-end">
                    <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-slate-400 border border-slate-200">職場實務</span>
                    <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-slate-400 border border-slate-200">協作溝通</span>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-white border-4 border-blue-900 rounded-2xl z-10 items-center justify-center -translate-x-1/2 absolute left-1/2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full animate-ping" />
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform hover:scale-[1.02]">
                    <p className="text-slate-600 leading-relaxed">
                      在專業領域中持續學習，結合學科知識與職場實務。提升了自己的抗壓能力與職場溝通技巧，學習如何在真實工作環境中高效協作。
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-0"
              >
                <div className="md:w-1/2 md:pl-16 flex flex-col items-start text-left">
                  <span className="text-blue-600 font-black text-sm uppercase tracking-widest mb-2">2025 ~ 2025</span>
                  <h3 className="text-2xl font-black text-slate-900">御風輪實習</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-slate-400 border border-slate-200">航行實習</span>
                    <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-slate-400 border border-slate-200">海上作業</span>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-white border-4 border-blue-900 rounded-2xl z-10 items-center justify-center -translate-x-1/2 absolute left-1/2">
                  <Ship className="w-5 h-5 text-blue-900" />
                </div>
                <div className="md:w-1/2 md:pr-16 md:text-right">
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform hover:scale-[1.02]">
                    <p className="text-slate-600 leading-relaxed">
                      於「御風輪」上進行航行實習，親身體驗海上作業與船舶管理。這段在海上的日子，不僅磨練了我的心理素質，也讓我學會了團隊協作與嚴謹作業的重要性。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section id="showcase" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-900 text-xs font-black uppercase tracking-widest mb-6 border border-indigo-100">
              <Sparkles className="w-3 h-3" /> Creative Showcase
            </div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">作品展示專區</h2>
            <p className="text-slate-500 mt-4 max-w-xl">點擊下方作品即可直接在網頁中開啟查看</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white shadow-sm text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all`}>
                  <project.icon className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase mb-2 block">{project.date}</span>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedProject(project.id)}
                  className="flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:translate-x-2 transition-transform"
                >
                  開始瀏覽 <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Viewer Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-900/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="h-16 px-6 border-b border-slate-100 flex items-center justify-between bg-white relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900">
                    <selectedProjectData.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-slate-900">{selectedProjectData.title}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={(selectedProjectData as any).url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 hover:text-blue-900 rounded-lg text-xs font-bold transition-colors border border-slate-100"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    在新分頁打開
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-slate-50 relative overflow-auto">
                {selectedProject === 'travel' ? (
                  <div className="p-8 md:p-12 max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                      <h5 className="text-3xl font-black text-slate-900 mb-4">2026 清明連假旅遊預算概要</h5>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {(selectedProjectData as any).details?.budget.map((item: any) => (
                          <div key={item.name} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.name}</p>
                            <p className="text-xl font-black text-slate-900">${item.value.toLocaleString()}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 p-4 bg-blue-900 text-white rounded-2xl flex items-center justify-between">
                        <span className="font-bold flex items-center gap-2 px-2 italic"><Sparkles className="w-4 h-4" /> 預估每人總預算</span>
                        <span className="text-2xl font-black">$20,139 TWD</span>
                      </div>
                    </div>

                    <div className="space-y-12">
                      {(selectedProjectData as any).details?.days.map((day: any) => (
                        <div key={day.day}>
                          <div className="flex items-center gap-4 mb-6">
                            <span className="text-4xl font-black text-blue-900 italic">{day.day}</span>
                            <div className="h-px flex-1 bg-slate-200" />
                            <span className="text-slate-400 font-bold tracking-widest">{day.date}</span>
                          </div>
                          <h6 className="text-2xl font-black text-slate-900 mb-8">{day.title}</h6>
                          <div className="space-y-4">
                            {day.items.map((item: any, idx: number) => (
                              <div key={idx} className="flex gap-4 group">
                                <div className="w-20 text-blue-600 font-black pt-1">{item.time}</div>
                                <div className="flex-1 pb-8 border-l border-slate-100 pl-6 relative">
                                  <div className="absolute -left-[4.5px] top-2 w-2 h-2 bg-blue-200 rounded-full group-hover:bg-blue-600 group-hover:scale-150 transition-all" />
                                  <div className="flex items-start justify-between mb-2">
                                    <h7 className="font-black text-slate-900">{item.activity}</h7>
                                    <span className="text-sm font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">{item.cost}</span>
                                  </div>
                                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 p-8 bg-orange-50 rounded-3xl border border-orange-100">
                      <div className="flex items-center gap-3 mb-4 text-orange-900">
                        <CheckCircle2 className="w-6 h-6" />
                        <h5 className="text-xl font-black">關鍵行動提醒</h5>
                      </div>
                      <ul className="space-y-2 text-orange-800/80 font-medium list-disc pl-5">
                        <li>Day 2 的「筑馨居」無菜單料理非常熱門，務必於行程前 21 天預約。</li>
                        <li>記得設定鬧鐘搶購清明連假早鳥高鐵票以防向隅。</li>
                      </ul>
                    </div>
                  </div>
                ) : (selectedProjectData as any).videoUrl ? (
                  <div className="w-full h-full flex items-center justify-center p-8 bg-black">
                    <video 
                      src={(selectedProjectData as any).videoUrl} 
                      controls 
                      autoPlay 
                      className="max-w-full max-h-full rounded-xl shadow-2xl"
                    />
                  </div>
                ) : (
                  <iframe 
                    src={selectedProjectData.url}
                    className="w-full h-full border-none"
                    title="Project Viewer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills & Certs Section */}
      <section id="skills" className="py-32 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">電腦技能</h2>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Digital DNA</p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600">
                      <FileText className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">辦公應用軟體</h4>
                  <p className="text-slate-500 text-sm mb-6 font-medium">熟練操作 Word, Excel, PowerPoint，具備優異的文書報告製作與數據呈現能力。</p>
                </div>

                <div className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600">
                      <Navigation className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">專案應用軟體</h4>
                  <p className="text-slate-500 text-sm mb-6 font-medium">針對航海專業領域之輔助軟體操作，包含電子海圖模擬、導航 planning 等專業工具。</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-indigo-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">專業證照</h2>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Certified Professional</p>
                </div>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-indigo-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900">STCW 四小證</h4>
                    <p className="text-slate-500 text-sm font-medium">基本安全訓練，確保海上生存與緊急應對能力。</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-indigo-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900">其它證照</h4>
                    <p className="text-slate-500 text-sm font-medium">包含航海通訊、特殊應對等專業與通用能力認證。</p>
                  </div>
                </motion.div>

                <div className="mt-12 p-10 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rotate-45 transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl font-black mb-4">學歷背景</h4>
                  <p className="text-blue-100/70 font-medium mb-1">國立高雄科技大學</p>
                  <p className="text-blue-100/50 text-sm">航運技術系 (Department of Marine Technology)</p>
                  <div className="mt-8 flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest">
                    <BookOpen className="w-4 h-4" /> 2022 - 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-black text-slate-900 mb-4">吳衫憲 Wu Shan-hsien</h3>
          <p className="text-slate-400 text-sm mb-10 max-w-sm mx-auto font-medium leading-relaxed">
            這份作品集展現了我對航海專業的熱情與堅持。隨時歡迎與我聯絡討論。
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="mailto:a111182139@nkust.edu.tw" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-900 shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.4em]">© 2026 Marine Professional Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

