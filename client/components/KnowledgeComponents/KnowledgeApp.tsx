import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from 'next/Link';

function Store({ match }:{match:any}) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function KnowledgeApp() {
    return (
      <div className="container">
        <AnimateSharedLayout >
          <Header />
            <Link href="/:id">
                <Store match = 'a'/>
            </Link>
        </AnimateSharedLayout>
      </div>
    );
  }
  ////{["/:id", "/"]}