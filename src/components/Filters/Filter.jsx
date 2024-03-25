import {
    Aside,
    CheckboxWrapper,
    Field, FieldLocation, FieldLocationWrap,
    FilterGroupTitle, FilterTitle,
    FormGroup,
    SvgIcon,
    SvgWrapp,
    Text
} from "./Filter.styled.js";
import { Formik, Form } from 'formik';
import sprite from "assets/filter-icons.svg"
import location from "assets/categories.svg"
import { ButtonStyle } from "../Parts/Button/Button.styled.js";
export const Filter = () => {

    return (
        <Aside>
            <Formik
                initialValues={{
                    checked: [],
                }}

                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <FilterTitle>Location</FilterTitle>
                    <FieldLocationWrap>
                        <FieldLocation name="location" placeholder="City"/>
                        <SvgIcon width="18" height="20">
                            <use xlinkHref={`${location}#location`}/>
                        </SvgIcon>
                    </FieldLocationWrap>

                    <FilterTitle>Filters</FilterTitle>
                    <div>
                        <FilterGroupTitle id="checkbox-group">Vehicle equipment</FilterGroupTitle>
                        <FormGroup role="group" aria-labelledby="checkbox-group">
                            <CheckboxWrapper>
                                <Field type="checkbox" name="checked" value="ac"/>
                                <SvgWrapp>
                                    <svg width="32" height="32">
                                        <use xlinkHref={`${sprite}#ac`}/>
                                    </svg>
                                    <Text>AC</Text>
                                </SvgWrapp>
                            </CheckboxWrapper>
                            <CheckboxWrapper>
                                <Field type="checkbox" name="checked" value="automatic"/>
                                <SvgWrapp>
                                    <svg width="32" height="32">
                                        <use xlinkHref={`${sprite}#automatic`}/>
                                    </svg>
                                    <Text>Automatic</Text>
                                </SvgWrapp>
                            </CheckboxWrapper>
                            <CheckboxWrapper>
                                <Field type="checkbox" name="checked" value="kitchen"/>
                                <SvgWrapp>
                                    <svg width="32" height="32">
                                        <use xlinkHref={`${sprite}#kitchen`}/>
                                    </svg>
                                    <Text>Kitchen</Text>
                                </SvgWrapp>
                            </CheckboxWrapper>
                            <CheckboxWrapper>
                                <Field type="checkbox" name="checked" value="tv"/>
                                <SvgWrapp>
                                    <svg width="32" height="32">
                                        <use xlinkHref={`${sprite}#tv`}/>
                                    </svg>
                                    <Text>TV</Text>
                                </SvgWrapp>
                            </CheckboxWrapper>
                            <CheckboxWrapper>
                                <Field type="checkbox" name="checked" value="shower"/>
                                <SvgWrapp>
                                    <svg width="32" height="32">
                                        <use xlinkHref={`${sprite}#shower`}/>
                                    </svg>
                                    <Text>Shower</Text>
                                </SvgWrapp>
                            </CheckboxWrapper>
                        </FormGroup>
                    </div>
                    <div>
                        <FilterGroupTitle id="checkbox-group">Vehicle type</FilterGroupTitle>
                        <FormGroup role="group" aria-labelledby="checkbox-group">
                            <CheckboxWrapper>
                                <Field type="checkbox" name="checked" value="van"/>
                                <SvgWrapp>
                                    <svg width="32" height="32">
                                        <use xlinkHref={`${sprite}#van`}/>
                                    </svg>
                                    <Text>Van</Text>
                                </SvgWrapp>
                            </CheckboxWrapper>
                            <CheckboxWrapper>
                                <Field type="checkbox" name="checked" value="fully-integrated"/>
                                <SvgWrapp>
                                    <svg width="32" height="32">
                                        <use xlinkHref={`${sprite}#fully-integrated`}/>
                                    </svg>
                                    <Text>Fully Integrated</Text>
                                </SvgWrapp>
                            </CheckboxWrapper>
                            <CheckboxWrapper>
                                <Field type="checkbox" name="checked" value="alcove"/>
                                <SvgWrapp>
                                    <svg width="32" height="32">
                                        <use xlinkHref={`${sprite}#alcove`}/>
                                    </svg>
                                    <Text>Alcove</Text>
                                </SvgWrapp>
                            </CheckboxWrapper>
                        </FormGroup>
                    </div>
                    <ButtonStyle type="submit">Submit</ButtonStyle>
                </Form>
            </Formik>
        </Aside>
    );
};

