'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SidebarItemNavigation from './sidebar-item-navigation';
import { Separator } from '@/components/ui/separator';
import { DATA_MENU_LINKS, DATA_SIDEBAR_BY_SECTIONS } from '@/lib/const/SIDEBAR';
import { usePathname } from 'next/navigation';

const MenuLinks = () => {
  const dataSidebarEntry = Object.entries(DATA_SIDEBAR_BY_SECTIONS);
  const pathnames =
    usePathname()
      ?.split('/')
      ?.filter((itm) => itm !== '') ?? [];

  const validateActiveMenu = (keyGroup: string, itemSelected: string) => {
    if (
      keyGroup.toLowerCase() === pathnames?.[1] &&
      itemSelected === pathnames?.[2]
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section className='space-y-2'>
      <div className='text-xs text-gray-400'>
        <span>Menu links</span>
        <Separator />
      </div>
      <section className='space-y-2'>
        <div>
          {DATA_MENU_LINKS.map((itm, idx) => {
            console.log(itm);
            return (
              <SidebarItemNavigation
                key={itm.id}
                keyGroup=''
                isActive={false}
                {...itm}
              />
            );
          })}
        </div>
        {/* {dataSidebarEntry.map(([key, item]) => (
          <Accordion
            key={key}
            type='single'
            collapsible
            defaultValue={key}
            className='flex flex-col gap-6'
          >
            <AccordionItem value={key} className='border-b-0'>
              <AccordionTrigger className='justify-start gap-2 p-0 mb-1 border-b-0 text-muted-foreground hover:no-underline'>
                <span className='text-sm'>{key}</span>
              </AccordionTrigger>
              <AccordionContent className='ps-1'>
                {item.map((itm) => (
                  <SidebarItemNavigation
                    key={itm.id}
                    keyGroup={key}
                    isActive={validateActiveMenu(key, itm.id)}
                    {...itm}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))} */}
      </section>
    </section>
  );
};

export default MenuLinks;
