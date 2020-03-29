//
//  InterestCollectionViewDataSource.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/28.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class InterestCollectionViewDataSource: NSObject, UICollectionViewDataSource {
    
    var interestViewModel: InterestViewModel?
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        let interestsItem = interestViewModel?.interests
        return interestsItem?.count ?? 0
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "InterestCell", for: indexPath) as! InterestCell
        let interestsItem = interestViewModel?.interests
        cell.interest = interestsItem?[indexPath.item] ?? ""
        cell.setButtonIndex(indexPath.item)
        cell.deleteButton.addTarget(self, action: #selector(handleDelete), for: .touchUpInside)
        return cell
    }
    
    @objc func handleDelete(button: UIButton) {
        let deleteButton = button as! InterestDeleteButton
        interestViewModel?.deleteInterest(at: deleteButton.index)
    }
}
