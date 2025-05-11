import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/common-crypto')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
