import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: IntNullableFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  username?: StringFilter;
};
