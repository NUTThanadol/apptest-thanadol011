import React from 'react'

export default function () {
  return (
    <div><table class="table">
    <thead>
      <tr> 
        <th scope="col">MemberPic</th>
        <th scope="col">Name-Surname</th>
        <th scope="col">Tel.</th>
        <th scope="col"></th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> <img src="./images/11.jpg" class="d-block" alt="width=40" height="40" /></td>
        <td>Thanadol Meesanga</td>
        <td>123456789</td>
        <td><button type="button" class="btn btn-success">Readmore</button></td>
      </tr>
      <tr>
        <td><img src="./images/12.jpg" class="d-block" alt="width=40" height="40" /></td>
        <td>Annie Zaa</td>
        <td>123456789</td>
        <td> <td><button type="button" class="btn btn-success">Readmore</button></td></td>
      </tr>
      <tr>
        <td><img src="./images/13.jpg" class="d-block" alt="width=40" height="40" /></td>
        <td>lora Ralo</td>
        <td>123456789</td>
        <td> <td><button type="button" class="btn btn-success">Readmore</button></td></td>
      </tr>
      <tr>
        <td><img src="./images/14.png" class="d-block" alt="width=40" height="40" /></td>
        <td>Rose Kokoa</td>
        <td>123456789</td>
        <td> <td><button type="button" class="btn btn-success">Readmore</button></td></td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}
