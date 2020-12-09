import { useState } from 'react';
import StyledWrapper from './styled';
export default function Home() {
  const [output, setOnput] = useState('');
  const [tip, setTip] = useState('');
  const handleInputChange = (evt) => {
    let { value } = evt.target;

    try {
      let tmpUrl = new URL(value);
      const { pathname, search, hash } = tmpUrl;
      console.log({ tmpUrl });
      setOnput(`https://hub.fastgit.org${pathname}${search}${hash}`);
      if (tmpUrl.hostname != 'github.com') {
        setTip('非Github地址');
      } else {
        setTip('');
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <StyledWrapper>
      {tip && <div className="tip">{tip}</div>}
      <input
        onChange={handleInputChange}
        className="input"
        type="url"
        placeholder="输入Github地址"
      />

      <a download href={output} className={`btn ${output ? 'downloadable' : ''}`}>
        跳转/下载
      </a>
    </StyledWrapper>
  );
}
