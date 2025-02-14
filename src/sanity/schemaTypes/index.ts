import { type SchemaTypeDefinition } from 'sanity'
import {product} from './product'
import { Category } from './category'
import {order} from "./order"; // ✅ Correct way to import a default export

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Category,order],
}
