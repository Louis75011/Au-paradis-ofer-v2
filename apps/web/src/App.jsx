// apps/web/src/App.jsx
import Layout from "./components/layout/Layout.jsx";
import DevRouteBadge from "./components/dev/DevRouteBadge.jsx";
import ScrollToTop from "./components/routing/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      {import.meta.env.DEV ? <DevRouteBadge /> : null}
      <ScrollToTop />
      <Layout />
    </>
  );
}
