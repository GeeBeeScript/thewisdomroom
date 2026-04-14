import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MainPopQuestionsItem = () => {
  return (
    <Accordion type="single" collapsible defaultValue="shipping" className="">
      <AccordionItem value="shipping">
        <AccordionTrigger>Is the Bible backed by Science?</AccordionTrigger>
        <AccordionContent>
          The Bible is primarily a spiritual book. Some historical and natural
          details align with scientific findings, but its main purpose is
          spiritual truth, not scientific explanation.
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="returns">
        <AccordionTrigger>
          Are God, Jesus and The Holy Spirit the same?
        </AccordionTrigger>
        <AccordionContent>
          There is one God in three Persons (the Trinity) — distinct Persons,
          yet one divine nature.
        </AccordionContent>
      </AccordionItem> */}
      {/* <AccordionItem value="support">
        <AccordionTrigger>How should prayer be done?</AccordionTrigger>
        <AccordionContent>
          Pray sincerely and humbly, from the heart, with faith — often
          following the model Jesus gave (Matthew 6:9–13), honoring God, seeking
          His will, and asking for daily needs.
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
};

export default MainPopQuestionsItem;
