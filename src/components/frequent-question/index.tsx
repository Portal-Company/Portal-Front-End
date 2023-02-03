import React, { useState, useEffect, useRef } from 'react'
import * as S from './styles'
import { FrequentQuestionsProps } from './type'
import { questions } from './mock'
import { FiArrowDown, FiMinus, FiPlus } from 'react-icons/fi'

const FrequentQuestions: React.FC = () => {
  const [clicked, setCliked] = useState<number>()
  const identifier = useRef<HTMLButtonElement>(null)

  return (
    <S.Container>
      <S.Title>Perguntas frequentes</S.Title>
      <p>Algumas perguntas frequentes</p>
      <S.AccordionList data-aos="zoom-in">
        {questions.map((value: FrequentQuestionsProps) => (
          <S.Item key={value.id}>
            <button
              ref={identifier}
              onClick={() =>
                clicked !== undefined && clicked === value.id
                  ? setCliked(undefined)
                  : setCliked(value.id)
              }
            >
              <span>
                {value.id}. {value.question}
              </span>{' '}
              <span className="fa-plus">
                {clicked === value.id ? <FiMinus /> : <FiPlus />}
              </span>
            </button>
            <div
              className={
                clicked === value.id && clicked !== undefined ? 'open' : 'close'
              }
              style={
                clicked === value.id && clicked !== undefined

                  ? { maxHeight: 18+ 'rem' }
                  : { maxHeight: 0 }
              }
            >
              {Array.isArray(value.answer) ? (
                <React.Fragment>
                  {value.answer.map((paragraph, index) => (
                    <p className="paragraph_array" key={index}>
                      {paragraph}
                    </p>
                  ))}
                </React.Fragment>
              ) : (
                <p>{value.answer}</p>
              )}
            </div>
          </S.Item>
        ))}
      </S.AccordionList>
    </S.Container>
  )
}

export default FrequentQuestions
