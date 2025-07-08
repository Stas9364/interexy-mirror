'use client';

import { LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { countryList } from './country-list';
import { FormInput } from './FormInput';
import './style.css';

export const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    budget: '$50 - 100k',
    country: '',
    phone: '',
    industry: '',
    file: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [showCountry, setShowCountry] = useState(false);
  // const [attachedFile, setAttachedFile] = useState('');
  const [name, setName] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.name === 'name') {
      setName(false);
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files;

  //   if (file) {
  //     const allowedExtensions = ['doc', 'docx', 'pdf', 'ppt', 'pptx'];
  //     const fileName = file[0]?.name.toLowerCase();
  //     const isValidExt = allowedExtensions.some(ext => fileName.endsWith('.' + ext));
  //     if (!isValidExt) {
  //       alert(
  //         'The file format is incorrect. Please upload a valid file type: doc, docx, pdf, ppt, pptx',
  //       );
  //       e.target.value = '';
  //       return;
  //     }

  //     setAttachedFile(fileName);
  //   }
  // };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    if (!form.name.trim()) {
      setName(true);

      return;
    }

    const res = await fetch('/api/contact-us', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    try {
      if (res.ok) {
        setStatus('success');

        setForm({
          name: '',
          email: '',
          message: '',
          budget: '$50 - 100k',
          country: '',
          phone: '',
          industry: '',
          file: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='w-full max-w-none bg-[#F1F3F9] px-[15px] py-[30px] lg:max-w-[830px] lg:p-10'>
      <p className='mb-[30px] text-[32px] leading-[1.4] font-medium md:mb-[50px]'>
        Contact us
      </p>

      <form onSubmit={handleSubmit} className='flex flex-col gap-y-[50px]'>
        <div className='grid grid-cols-2 gap-x-[30px] gap-y-[50px]'>
          <div className='relative flex w-full flex-col'>
            <FormInput
              value={form.name}
              type='text'
              name='name'
              placeholder='Name'
              required={true}
              handleChange={handleChange}
            />

            {name && (
              <span className='absolute bottom-[-23px] text-xs leading-[1.5] font-light text-[#FF3D2E]'>
                * insert correct Name
              </span>
            )}
          </div>
          <FormInput
            value={form.email}
            type='email'
            name='email'
            placeholder='E-mail'
            required={true}
            handleChange={handleChange}
          />

          <FormInput
            value={form.phone}
            type='tel'
            name='phone'
            placeholder='Phone'
            required={true}
            handleChange={handleChange}
            pattern='\+?[0-9\s\-\(\)]+'
          />

          <select
            name='industry'
            className='text-secondary h-[50px] cursor-pointer border-b-1 border-[#9C9C9C] text-lg leading-[1.4] font-normal focus:outline-none'
            onChange={handleChange}
            value={form.industry}
          >
            <option value='' disabled>
              Industry
            </option>
            <option value='Healthcare'>Healthcare</option>
            <option value='Fintech'>Fintech</option>
            <option value='Blockchain'>Blockchain</option>
            <option value='Real Estate'>Real Estate</option>
            <option value='E-Commerce'>E-Commerce</option>
            <option value='AI'>AI</option>
            <option value='IoT'>IoT</option>
            <option value='EdTech'>EdTech</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor='budget'
            className='text-secondary text-sm leading-[1.4] font-normal'
          >
            Project budget (min.$50k)
          </label>
          <select
            id='budget'
            name='budget'
            className='text-secondary h-[50px] w-full cursor-pointer border-b-1 border-[#9C9C9C] text-lg leading-[1.4] font-normal focus:outline-none'
            onChange={handleChange}
            value={form.budget}
          >
            <option value='$50 - 100k'>$50 - 100k</option>
            <option value='$100 - 250k'>$100 - 250k</option>
            <option value='$250 - 500k'>$250 - 500k</option>
            <option value='$1M+'>$1M+</option>
          </select>
        </div>

        <select
          name='country'
          required
          className='text-secondary h-[50px] w-full cursor-pointer border-b-1 border-[#9C9C9C] text-lg leading-[1.4] font-normal focus:outline-none'
          onChange={handleChange}
          onClick={() => setShowCountry(true)}
          value={form.country}
        >
          <option value='' disabled>
            Country
          </option>
          {showCountry &&
            countryList.map((country, idx) => (
              <option key={country + idx} value={country}>
                {country}
              </option>
            ))}
        </select>

        <FormInput
          value={form.message}
          type='text'
          name='message'
          placeholder='Please describe your request in detail'
          handleChange={handleChange}
        />

        {/* <div className='mt-[-30px]'>
          <div className='relative flex items-baseline justify-end'>
            <label className='hover:text-accent flex cursor-pointer items-center justify-end gap-2 pr-[25px] text-2xl font-medium duration-200'>
              <Paperclip />
              Attach file
              <input
                type='file'
                name='file'
                className='hidden'
                onChange={handleFileChange}
                accept='.doc,.docx,.pdf,.ppt,.pptx'
              />
            </label>
            <div className='absolute bottom-3 flex items-center'>
              <span className='group relative flex items-center'>
                <CircleQuestionMark size={18} color='#9c9c9c' strokeWidth={2} />
                <p className='pointer-events-none absolute right-[-5px] bottom-[-15px] z-10 flex -translate-y-1/2 flex-col rounded bg-[#fff] px-5 py-[25px] text-base whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                  <span> You can attach 1 file 2MB overall.</span>
                  <span>Formats: doc, docx, pdf, ppt, pptx.</span>
                </p>
              </span>
            </div>
          </div>
          {attachedFile && <p className='text-end'>{attachedFile}</p>}
        </div> */}

        <button
          type='submit'
          disabled={isLoading}
          className={`bg-btn hover:bg-btn-hover relative w-full cursor-pointer rounded-[5px] px-[30px] py-[18px] text-base leading-[1.4] text-white opacity-50 duration-200 md:w-[183px] ${isLoading ? 'opacity-50' : 'opacity-100'}`}
        >
          Send a message
          {isLoading && (
            <LoaderCircle
              className='absolute top-1/2 left-2 -translate-y-1/2 animate-spin'
              size={16}
              strokeWidth={3}
            />
          )}
        </button>
        {status === 'success' && (
          <div className='flex h-[56px] gap-x-2 bg-[#F6FFED] p-4 leading-[1.5]'>
            <Image src={'/alert-ok.svg'} alt='icon' width={24} height={24} />
            Form was sended
          </div>
        )}
        {status === 'error' && (
          <div className='flex h-[56px] gap-x-2 bg-[#FFF1F0] p-4 leading-[1.5]'>
            <Image src={'/alert-err.svg'} alt='icon' width={24} height={24} />
            Form was not sended
          </div>
        )}
      </form>
    </div>
  );
};
