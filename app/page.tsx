// app/page.tsx
import Layout from './layout';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic'; 

// const ExampleComponent = dynamic(() => import("./path/toComponent"));

const HomePage = () => {
  return (
    <div>
      {/* 产品介绍 */}
      <section className="text-center space-y-4 mb-12">
        {/* <h1 className="text-6xl font-bold">产品介绍</h1> */}
        <p className="text-xl">这是产品的超大字体介绍，吸引用户注意。</p>
      </section>
      
      {/* 详细介绍 */}
      <section className="text-center space-y-4 mb-12">
        {/* <h2 className="text-10xl font-semibold">详细介绍</h2> */}
        <p className="text-lg">这是产品详细介绍的部分，包含更多产品信息。</p>
      </section>
      
      {/* 用户评价 */}
      <section className="space-y-4">
        <h3 className="text-3xl font-semibold text-center">用户评价</h3>
        <div className="flex flex-col items-center space-y-2">
          <blockquote className="bg-orange-200 dark:bg-gray-700 p-4 rounded-md">
            <p>“这是一个非常棒的产品，我非常喜欢！”</p>
            <cite>- 用户A</cite>
          </blockquote>
          <blockquote className="bg-orange-200 dark:bg-gray-700 p-4 rounded-md">
            <p>“自从使用了这个产品，我的生活变得更加美好。”</p>
            <cite>- 用户B</cite>
          </blockquote>
          {/* 更多用户评价 */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;


