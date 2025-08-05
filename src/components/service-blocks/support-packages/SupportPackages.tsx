import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { packages } from './packages';

export const SupportPackages = () => {
  return (
    <Section>
      <Container>
        <BlockTitle title='Support packages'>
          <p className='mt-5 max-w-[870px]'>
            We provide products maintenance services for the current clients after the
            development stage of outsource projects. All packages are concluded for a
            minimum of 12 months.
          </p>
        </BlockTitle>

        <div className='flex grid-cols-3 flex-col items-center gap-x-6 gap-y-[30px] lg:grid lg:items-start'>
          {packages.map(
            (
              {
                popular,
                sale,
                price,
                title,
                description,
                included,
                not_included,
                options,
              },
              idx,
            ) => (
              <div
                key={title}
                className='flex flex-col'
                style={{
                  color: idx % 2 === 0 ? '#101018' : '#fff',
                }}
              >
                <div
                  className='relative rounded-[20px] px-4 py-6 md:px-[34px] md:py-10'
                  style={{
                    backgroundColor: idx % 2 === 0 ? '#f6f6fd' : ' #6375ED',
                  }}
                >
                  {popular && (
                    <span className='absolute top-[-15px] left-1/2 flex -translate-x-1/2 gap-x-[5px] rounded-[6px] bg-[#D8D1FF] p-[5px] text-base font-bold text-[#4438CB] before:block before:min-h-[17px] before:min-w-[17px] before:bg-[url(/star.png)] before:bg-center before:bg-no-repeat before:content-[""]'>
                      Most popular
                    </span>
                  )}

                  {sale && (
                    <span className='absolute top-[-15px] left-1/2 flex -translate-x-1/2 gap-x-[5px] rounded-[6px] bg-[#F5E49D] p-[5px] text-base font-bold text-[#EC6264] before:block before:min-h-[17px] before:min-w-[17px] before:bg-[url(/fire.png)] before:bg-center before:bg-no-repeat before:content-[""]'>
                      -{sale}% OFF
                    </span>
                  )}

                  <div className='flex flex-col items-center border-b border-[#e4e3ee]'>
                    <div className='flex flex-col items-center pb-4'>
                      <span
                        className='text-lg leading-[1.4] font-normal text-[#413588A6]'
                        style={{ color: idx % 2 === 0 ? '#413588A6' : '#FFFFFFA6' }}
                      >
                        Starts from:
                      </span>
                      <p
                        className='text-[42px] leading-[49px] font-bold'
                        style={{
                          color: idx % 2 === 0 ? '#5067f4' : '#fff',
                        }}
                      >
                        {sale && <span>${price - (price * sale) / 100}</span>}

                        <span
                          style={{
                            textDecoration: sale ? 'line-through' : '',
                            fontSize: sale ? '20px' : ' 42px',
                          }}
                        >
                          ${price}
                        </span>
                      </p>
                      <span
                        className='text-lg font-normal'
                        style={{
                          color: idx % 2 === 0 ? '#5067f4' : '#fff',
                        }}
                      >
                        /per month
                      </span>
                    </div>
                    <p className='pb-6 text-2xl leading-[1.4] font-normal'>{title}</p>
                  </div>

                  <div className='flex flex-col items-center'>
                    <ul className='mx-auto my-[30px] flex flex-col gap-y-[6px]'>
                      <li className='list-disc text-xl leading-[1.4] 2xl:text-2xl'>
                        <span className='font-bold'>{description.developer}</span> – per 1
                        developer
                      </li>
                      <li className='list-disc text-xl leading-[1.4] 2xl:text-2xl'>
                        <span className='font-bold'>{description.qa}</span> – QA
                      </li>
                      <li className='list-disc text-xl leading-[1.4] 2xl:text-2xl'>
                        <span className='font-bold'>{description.pm}</span> – PM
                      </li>
                      {description.ba && (
                        <li className='list-disc text-xl leading-[1.4] 2xl:text-2xl'>
                          <span className='font-bold'>{description.ba}</span> – BA
                        </li>
                      )}
                    </ul>

                    <div className='w-full'>
                      <h3 className='text-center text-2xl leading-[1.4] font-bold'>
                        Whats included
                      </h3>
                      <ul className='mt-[30px]'>
                        {included.slice(0, 5).map((item, _idx) => (
                          <li
                            key={_idx}
                            className='mb-[8px] flex items-center gap-x-[8px] text-lg leading-[1.4] font-normal before:block before:min-h-[17px] before:min-w-[17px] before:bg-[url(/include.png)] before:bg-center before:bg-no-repeat before:content-[""]'
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Accordion type='single' collapsible>
                        <AccordionItem value='not_included'>
                          <AccordionContent>
                            <ul>
                              {included.slice(5).map((item, _idx) => (
                                <li
                                  key={_idx}
                                  className='mb-[8px] flex items-center gap-x-[8px] text-lg leading-[1.4] font-normal before:block before:min-h-[17px] before:min-w-[17px] before:bg-[url(/include.png)] before:bg-center before:bg-no-repeat before:content-[""]'
                                >
                                  {item}
                                </li>
                              ))}
                              {not_included.map((item, _idx) => (
                                <li
                                  key={_idx}
                                  className='mb-[8px] flex items-center gap-x-[8px] text-lg leading-[1.4] font-normal text-[#3E346566] line-through before:block before:min-h-[17px] before:min-w-[17px] before:bg-[url(/noinclude.png)] before:bg-center before:bg-no-repeat before:content-[""]'
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                          <AccordionTrigger
                            className='group flex cursor-pointer items-center justify-center'
                            style={{ color: idx % 2 === 0 ? '#5067f4' : '#fff' }}
                          >
                            <span className='text-lg font-bold group-data-[state=open]:hidden'>
                              View all
                            </span>
                            <span className='hidden text-lg font-bold group-data-[state=open]:inline'>
                              Hide
                            </span>
                          </AccordionTrigger>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    <Link
                      href='/contact-us'
                      className='hover:!bg-btn-hover flex w-full justify-center rounded-[20px] py-5 text-lg leading-[1.4] font-bold duration-200 hover:!text-white'
                      style={{
                        backgroundColor:
                          idx % 2 === 0
                            ? title === 'Enterprise Package'
                              ? '#F5E49D'
                              : '#cdbef6'
                            : ' #fff',
                        color: idx % 2 === 0 ? '#101018' : '#5067f4',
                      }}
                    >
                      {title}
                    </Link>

                    {options?.optional.length && (
                      <div
                        className='mt-6 flex w-full flex-col items-center rounded-[20px] bg-[#B9C3FF40] px-5 py-[14px]'
                        style={{
                          color: idx % 2 === 0 ? '#101018' : '#fff',
                        }}
                      >
                        <div className='mb-5 flex flex-col items-center'>
                          <h4 className='mb-[14px] text-center text-xl leading-[200%] font-bold'>
                            Optional:
                          </h4>
                          <ul>
                            {options?.optional.map(item => (
                              <li key={item} className='list-disc text-lg font-light'>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className='flex w-full flex-col'>
                          <h4 className='mb-[14px] self-center text-center text-xl leading-[200%] font-bold'>
                            Whats included:
                          </h4>
                          <ul>
                            {options?.included.map(item => (
                              <li
                                key={item}
                                className='flex gap-x-[8px] text-lg font-light before:block before:min-h-[17px] before:min-w-[17px] before:bg-[url(/include.png)] before:bg-center before:bg-no-repeat before:content-[""]'
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </Container>
    </Section>
  );
};
