"use client";
// import { Transition } from "@headlessui/react";
import { useRouter } from "next-intl/client";
import React, { useCallback, useState } from "react";
// import { SearchAction } from "./search-action/search-action.component";
import styles from "./search.module.scss";

import { Button } from "@components/button/button.component";
import { Input } from "@components/input/input.component";
import { SearchIcon } from "@components/icon";
// import { Arrow, Search as SearchIcon } from "@components/icons";
// import { Routes, SearchQueryKeys } from "@constants";
// import { classnames } from "@helpers";
// import { type TranslationsTypes } from "@interfaces";

type FormValue = {
  search: string;
  rubrics: string[];
  whereToFind: string;
  sorting: string;
  authors: string;
};

type AllowedType = string[] | null[] | any[];

const classnames = <T extends AllowedType>(...className: T) =>
  [...className].join(" ");

type TranslationsTypes<T> = {
  [key: string]: T;
};
const initValue: FormValue = {
  search: "",
  rubrics: [],
  whereToFind: "",
  sorting: "",
  authors: "",
};

export const Search = ({}: // categoryCheckboxes,
// translations,
// searchFiltersBlock,
{
  // TODO: add types
  // categoryCheckboxes: any;
  // translations: TranslationsTypes<string>;
  // searchFiltersBlock: any;
}) => {
  // const { values, handleChange, setValueField } = useForm<FormValue>(initValue);

  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  const onSubmit = useCallback(
    async (even: any) => {
      even.preventDefault();
    },
    [router]
  );

  const onOpen = useCallback((value: boolean) => setOpen(value), []);
  const onClickOverlay = useCallback(() => onOpen(false), [onOpen]);
  const onToggle = useCallback(() => setOpen((isOpen) => !isOpen), []);

  return (
    <>
      <form
        className={classnames(styles.root, isOpen ? styles.active : "")}
        onSubmit={onSubmit}
      >
        <>
          <div>1</div>
          <div className={styles.inputWrap}>
            <Input
              placeholder="Пошук"
              classNameContainer={styles.inputContainer}
              className={styles.input}
              classNameIconLeft={styles.inputIconLeft}
              classNameIconRight={styles.inputIconRight}
              name="search"
              // value={values.search}
              // onChange={handleChange}
              onClick={() => onOpen(true)}
              iconLeft={
                // <div>2</div>
                <Button color="grey" className={styles.inputButton}>
                  <SearchIcon className={styles.inputIcon} />
                </Button>
              }
              // iconRight={
              //     <Button
              //         color="grey"
              //         onClick={onToggle}
              //         className={styles.popoverButton}>
              // <Arrow
              //   className={classnames(
              //     styles.inputIcon,
              //     styles.iconArrow,
              //     isOpen ? styles.iconArrowIsOpen : null
              //   )}
              // />
              //     </Button>
              // }
            />
          </div>
          {/* <Transition
            show={isOpen}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={styles.container}>
              <div className={styles.block}>
                <h3 className={styles.title}>{translations.categories}</h3>
                <div
                  className={classnames(
                    styles.blockInputs,
                    styles.blockInputsRubrics
                  )}
                >
                  <MultiInputCheckbox
                    list={categoryCheckboxes}
                    name="rubrics"
                    isAll
                    getValue={setValueField}
                  />
                </div>
              </div>
              <div className={styles.block}>
                <div className={styles.blockWrap}>
                  {searchFiltersBlock.map((item: any, index: number) => (
                    <div key={index} className={styles.blockContent}>
                      <h3 className={styles.title}>{item.title}</h3>
                      {item.label === SearchQueryKeys.WHERE_TO_FIND ? (
                        <div
                          className={classnames(
                            styles.blockInputs,
                            styles.blockInputsWhereToLook
                          )}
                        >
                          <MultiInputCheckbox
                            list={item.subMenu}
                            name={item.label}
                            getValue={setValueField}
                          />
                        </div>
                      ) : (
                        <div className={styles.blockInputs}>
                          <MultiInputRadio
                            list={item.subMenu}
                            name={item.label}
                            defaultValue="createdAt"
                            getValue={setValueField}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.block}>
                <div className={styles.blockWrap}>
                  <SearchAction
                    getValue={setValueField}
                    initAuthors={initValue.authors}
                  />
                </div>
              </div>
            </div>
          </Transition> */}
        </>
      </form>
      {/* <Portal>
                <div
                    className={isOpen ? styles.overlay : styles.overlayHidden}
                    tabIndex={-1}
                    onClick={onClickOverlay}
                />
            </Portal> */}
    </>
  );
};
